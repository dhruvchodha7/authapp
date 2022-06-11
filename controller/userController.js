const User = require('../model/user')
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRY
    });
}

exports.register = async(req, res) => {
    try{
        const {name, email, password} = req.body;
        const myEncPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password: myEncPassword,
            emailToken: crypto.randomBytes(64).toString('hex'),
            isVerified: false,
        })
        const newUser = await user.save();
        res.redirect('/user/login')
    }catch(error){
        console.log(error);
    }

}

exports.registerScreen = async(req, res)=>{
    res.render('register');
}

exports.login = async(req, res)=>{
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({email: email});
        console.log(existingUser);
        if(existingUser){
            console.log(password);
            console.log(existingUser.password);

            const match = bcrypt.compare(password, existingUser.password);
            console.log(match);
            if(match){
                const token = createToken(existingUser.id)
                res.cookie('access-token', token)
                res.status(200).json({
                    success: true,
                    msg: "User Logged In"
                })
                res.redirect('/dashboard');
            }else{
                console.log('Invalid Password');
            }
            
        }else{
            console.log('User not registered ')
        }
    } catch (error) {
        console.log(error);
    }
}

exports.loginScreen = (req, res) => {
    res.render('login');
}
