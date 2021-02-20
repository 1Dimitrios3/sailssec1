
// var bcrypt = require('bcryptjs');
const crypto = require("crypto");
const nodemailer = require("nodemailer")
const sendgridTransport = require("nodemailer-sendgrid-transport")
const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key : ""
    }
}))

module.exports = {

    inputs: {
        emailAddress: {type: 'string', required: true },
        token: {type: 'string'},
        resetTokenExpiration:{
            type:"string"
        }
    },

    exits: {},

    fn: async function(inputs){
        let user = await User.findOne({emailAddress: inputs.emailAddress})
 

        if(user){
            crypto.randomBytes(32,(err,buffer)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(buffer)
                }
                const findToken = buffer.toString("hex")
                const expire = user.resetTokenExpiration = Date.now().toString() + 3600000
                User.updateOne({emailAddress: inputs.emailAddress}).set({token:findToken, resetTokenExpiration:expire})
                .then(result=>{
                    console.log(result)
                    transporter.sendMail({
                        to:inputs.emailAddress,
                        from:"alexander@zorbadakis.me",
                        subject:"Password reset",
                        html:`
                        <p>You requested a password reset</p>
                        <p>Click this <a href="http://localhost:1338/reset/${findToken}">Link</a> to set a new password. </p>
                        `
                    });
                })
                .catch(err=>{
                    console.log(err)
                })
            })
            // const findToken = inputs.token
            // bcrypt.hash(findToken, 0, function(err, hash){
            //     if(err){
            //         console.log(err)
            //     }else if(hash){
            //     User.updateOne({emailAddress: inputs.emailAddress}).set({token:hash})
            //     .then(result=>{
            //         console.log(result)
            //     })
            //     .catch(err=>{
            //         console.log(err)
            //     })
            //  }
            // })
        }else{
            console.log("no")
        }

      
    }
}