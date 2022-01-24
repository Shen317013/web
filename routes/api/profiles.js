const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require ("../../models/Profile");


router.get("/test",(req,res)=>{
	res.json({msg:'profile works'});
});

//傳遞前端訊息給後台 (傳遞內容:聯絡人資訊、點菜內容、總金額)
router.post("/add_order",passport.authenticate("jwt",{session:false}),(req,res)=>{
	const profileFields = {};
	
	if(req.body.addressInfo) profileFields.addressInfo = req.body.addressInfo;
	if(req.body.orderInfo) profileFields.orderInfo = req.body.orderInfo;
	if(req.body.totalPrice) profileFields.totalPrice = req.body.totalPrice;
	
	new Profile(profileFields).save().then(profile =>{
		res.json(profile);
	});
})

//獲取上方的資訊(用get獲取post到的資料) 可以用來獲取訂單資訊並傳遞訂單頁面
router.get("/order",passport.authenticate("jwt",{session:false}),(req,res)=>{
	Profile.findOne({ _id: req.params.id })
	.then(profile => {
		if(!profile){
			return res.status(404).json('沒有任何內容');
		}
		res.json(profile);
	})
	.catch(err => res.status(404).json(err));
	
});


module.exports = router;