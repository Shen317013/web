//login & register
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const keys = require("../../config/keys.js");
const passport = require("passport");

const User = require("../../models/User.js");

//$route Get api/users/test
//@desc 返回請求的json數據
//@access public
router.get("/test",(req,res)=>{
	res.json({msg:"login works"})
})

let carouseljsonfile = require("../../jsondata/carousel");
router.get("/carousel",(req,res)=>{
	res.json(carouseljsonfile);
})

let shopjsonfile = require("../../jsondata/shop");
router.get("/shop",(req,res)=>{
	res.json(shopjsonfile);
})

//$route Post api/users/register
//@desc 返回請求的json數據
//@access public
router.post("/register",(req,res)=>{
	//console.log(req.body);
	
	//查詢數據庫中是否擁有電子郵件
	User.findOne({email:req.body.email})
		.then(user=>{
			if(user){
				return res.status(400).json("電子郵件已被註冊")
			}else{
				const avatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});
				
				const newUser = new User({
					name:req.body.name,
					email:req.body.email,
					avatar,
					password:req.body.password
				})
				
				bcrypt.genSalt(10, function(err, salt) {
				    bcrypt.hash(newUser.password, salt, (err, hash) => {
				        if(err)throw err;
						
						newUser.password = hash;
						
						newUser.save()
							.then(user => res.json(user))
							.catch(err => console.log(err));
				    });
				});
				
			}
		})
	
})

//$route Post api/users/login
//@desc 返回token jwt passport
//@access public

router.post("/login",(req,res)=>{
	const email = req.body.email;
	const password = req.body.password;
	//查詢數據庫
	User.findOne({email})
		.then(user =>{
			if(!user){  //如果用戶不存在
				return res.status(404).json({email:"用戶不存在!"});
			}
			
			//如果用戶存在,密碼匹配
			bcrypt.compare(password, user.password)
				.then(isMatch=>{
					if(isMatch){ //如果密碼匹配成功
						const rule = {id:user.id,name:user.name};
						jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token)=>{
							if(err) throw err;
							res.json({
								success:true,
								token:"Bearer " + token
							})
						})
						//res.json({msg:"success"});
					}else{ //密碼匹配失敗
						return res.status(400).json({password:"密碼錯誤!"});
					}
				})
		})
})

//$route Get api/users/current
//@desc return current user
//@access Private
router.get("/current",passport.authenticate("jwt",{session:false}),(req,res)=>{
	res.json({
		id:req.user.id,
		name:req.user.name,
		email:req.user.email
	});
})

module.exports = router;