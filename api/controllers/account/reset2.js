var bcrypt = require('bcryptjs');

module.exports = {

    inputs: {
        password: {type: 'string'},
        token: {type: 'string'}
    },

    exits: {},

    fn: async function(inputs){
        var newPassword = inputs.password
        var user= await User.findOne({token:inputs.token})
        if(user){
            bcrypt.hash(inputs.password, 12, function(err,hashed){
                if(err){
                    console.log(err)
                }else if(hashed){
                    User.updateOne({token:inputs.token}).set({password:hashed})
                    .then(result=>{
                        console.log("nai aytos eimai")
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            })
            this.res.redirect('/login')
        } else {
            console.log("not me")
        }

        return { }
    
    }
}