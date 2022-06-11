const User = require('../model/user')
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


exports.login = (req, res) => {
    try {
        res.status(200).render('login').json({
            success: true,
        })
    } catch (error) {
        console.log(error);
    }
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