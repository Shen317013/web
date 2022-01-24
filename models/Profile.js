const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
    addressInfo:{
        type:{},
        require:true
    },
	orderInfo:{
		type:{},
		require:true
	},
    totalPrice:{
        type:Number,
        require:true
    },
	date:{
	    type:Date,
	    default:Date.now
	}
})

module.exports = Profile = mongoose.model("profile",ProfileSchema);