var bcrypt = require('bcryptjs');

module.exports = {

    inputs: {
        token: {type: 'string'},
        id:{type: 'string'}
    },

    exits: {
        success: {
            viewTemplatePath : 'pages/reset'
        }
    },

    fn: async function(inputs){
        var id = this.req.params.id;
        var user = await User.findOne({token:id})
        if(user){
            var getToken = user.token
        }else{
            console.log("oxi")
        }

        return { getToken }
    
    }
}