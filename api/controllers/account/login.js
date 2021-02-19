// var bcrypt = require('bcryptjs');

// module.exports = {
//     inputs: {
//         username: {type: 'string', required: true},
//         password: {type: 'string', required: true}
//     },
//     exits: {},

//     fn: async function(inputs) {
    
//         // let user = await User.findOne({
//         //     // the keys here need to match the User model attribute names e.g username as emailAddress 
//         //     emailAddress: inputs.username, 
//         //     });
//         //     let match = false;
//         //     match = await bcrypt.compare(inputs.password, user.password)
            
//         // console.log(user);
//         if(match) {
//             // this.req.me = user;
//             this.req.session.userId = user.id;
//             console.log(this.req.session);
//             // console.log(this.req)
//             return this.res.view('account/controlpanel')
//         } else {
//             this.res.statusCode = 403
//             return this.res.forbidden();
//         }
//     }
// }