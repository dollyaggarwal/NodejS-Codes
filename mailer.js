//import nodemailer
const nodemailer = require("nodemailer");

//configure email and send it
async function  sendMail(){
    //create an email transporter
    //SMTP(Simple Mail Transfer Protocol)
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'dollyaggarwal1712@gmail.com',
            pass:'irxd zagn dtur lpkh'
        },
    });
    // Configure email content
    const mailOptions = {
        from:'dollyaggarwal1712@gmail.com',
        to:'nakulprajapati238@gmail.com',
        subject:'Welcome to My NodeJS App',
        text:'This is a nodeJS app mail.'
    };
    //Send the email
    try{
       const result =await transporter.sendMail(mailOptions);
       console.log("Email sent successfully");
    }catch(err){
        console.log('Email send failed with error:' +err);
    }
}
sendMail();