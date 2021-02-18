var bcrypt = require('bcryptjs');

module.exports = {
  inputs: {
    emailAddress: {
      type: 'string', 
    },
    password: {
      type: 'string',
    },
    confirmPassword: {
      type: 'string',
    },
    fullName: {
      type: 'string',
    }
  },
  // exits: {
  //   success: {
  //     viewTemplatePath: 'account/signup'
  //   },
  //   // notAccepted: {
  //   //   statusCode: 406
  //   // }  
  // },
  fn: async function(inputs) {
    // var salt = bcrypt.genSalt(10);
    // var hashedPassword = bcrypt.hash(inputs.password, salt);

   const user2 = await User.findOne({ emailAddress: inputs.emailAddress });
        console.log(user2);
        if (user2) {
            return this.res.EmailAlreadyInUse("<h2> Email already in use! </h2>")
        } else {
            if (inputs.password == inputs.confirmPassword) {

                var user = await User.create({ fullName: inputs.fullName, password: await bcrypt.hash(inputs.password, 12), emailAddress: inputs.emailAddress });
                // console.log(this.req.session.userId)
                this.res.redirect('/');
            } else { // error
                // var error = "Passwords do not match"
                // this.res.status(406);
                // return this.res.view('account/signup', {data: error}); // some error returned to view
                return this.res.passwordsNotMatch("<h1>Passwords not match!!!</h1>")
            }
        }
   
  }
}

