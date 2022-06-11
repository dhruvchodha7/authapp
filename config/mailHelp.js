const nodemailer = require('nodemailer')

const mailHelper = async (req,options) => {
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS
        }
      });
    const message = {
        from: '"Upcloud Technology" <upcloudtech@gmail.com>', // sender address
        to: option.email, // list of receivers
        subject: 'Please Verify Your Email', // Subject line
        html: `<h2>${options.name}! thanks for registering to our site</h2>
                <h4>Please Verify Your mail to continue</h4>
                <a href="https://${req.headers.host}/user/verify-email?token=${optoins.emailToken}">Verify Your Email</a>`
    }
    await transporter.sendMail(message, (error, info) => {
        if(error){
            console.log(error);
        }else{
            console.log('Verification Email is sent')
        }
    });
    res.redirect('/user/login');
}

    module.exports = mailHelper;