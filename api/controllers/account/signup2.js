var bcrypt = require('bcryptjs');

module.exports = {
  inputs: {
    emailAddress: {
      type: 'string', 
    },
    password: {
      type: 'string',
      // required: true
    },
    confirmPassword: {
      type: 'string',
      // required: true
    },
    fullName: {
      type: 'string',
      // required: true
    }
  },
  exits: {
    // success: {
    //   viewTemplatePath: 'account/signup'
    // },
    // notAccepted: {
    //   statusCode: 406
    // }
    invalid: {
      responseType: 'badRequest',
      description: 'The provided inputs are not valid',
    }  
  },
  
  fn: async function(inputs) {
    // var salt = bcrypt.genSalt(10);
    // var hashedPassword = bcrypt.hash(inputs.password, salt);

    // EMERGENCY !!! CHECK the case when the user who signs up doesnt provide a password or email. Place if here...
    if(inputs.emailAddress == '' || inputs.password == '' || inputs.confirmPassword == '') {
        return this.res.view('account/notValid', { data: 'Please fill in all input fields!'});
    } else {
       const user2 = await User.findOne({ emailAddress: inputs.emailAddress });
        console.log(user2);
        if (user2) {
            return this.res.EmailAlreadyInUse("<h2> Email already in use! </h2>")
        } else {
            if (inputs.password == inputs.confirmPassword) { // move as first condition to check

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
}

