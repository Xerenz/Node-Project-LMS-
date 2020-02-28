const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new Schema(
    {
        username: {type:String,required:true, unique:true},
        password: {type:String},
        college: {type:String},
        phone: {type:Number},
        book: [{
            name: {type:String},
            author: {type:String},
            genre: {type:String}
        }]
    }
);

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user",userSchema);