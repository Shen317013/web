const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

//引入user.js
const users = require("./routes/api/users.js");
const profiles = require("./routes/api/profiles.js");

//使用body-parser中間件
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());



const db = require("./config/keys.js").mongoURI;
mongoose
	.connect(db,{ useNewUrlParser:true })
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

//passport 初始化
app.use(passport.initialize());

require("./config/passport.js")(passport);

// app.get("/",(req,res)=>{
// 	res.send("hello world!");
// })

//使用routes
app.use("/api/users",users);
app.use("/api/profiles",profiles);

//執行前端靜態頁面
if(process.env.NODE_ENV === "production"){
	app.use(express.static("client/dist"));
	app.get("*",(req,res)=>{
		res.sendFile(path.resolve(__dirname,"client","dist","index.html"));
	});
}

const port = process.env.PORT || 5001;

app.listen(port,() =>{
	console.log(`Server running on port ${port}`);
})