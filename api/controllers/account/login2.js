var bcrypt = require('bcryptjs');

module.exports = {
   inputs: {
        username: {type: 'string'},
        password: {type: 'string'}
    },
    exits: {
        success: {
            viewTemplatePath: 'unregistered/login'
        },
        
    },

    fn: async function(inputs) {
        console.log(this.req.session);
        let session = this.req.session;
        console.log(this.req.method);
      
        // here we return the login form
        if(this.req.method == 'GET' && this.req.session == undefined) {
            return {}
            // return this.res.view('unregistered/login')
        } 
        // here we answer to the form post request
        if(this.req.method == 'POST') {
            console.log('post');
            let user = await User.findOne({
            // the keys here need to match the User model attribute names e.g username as emailAddress 
            emailAddress: inputs.username, 
            });
            if(!user) {
                // return this.res.redirect('/login');
                return this.res.view('unregistered/notfound', {data: 'Username or Password not found. Please try again!'})
                //  return this.res.badRequest('Please try again!') // fix this with a view res.view + data to a new view
                
            } else {
                let match = false;
            console.log(user.password)
            match = await bcrypt.compare(inputs.password, user.password)

               if(match) {
            // this.req.me = user;
            this.req.session.userId = user.id;
            console.log(this.req.session);
            // console.log(this.req)
            return this.res.redirect('/controlpanel')
        }   else {
            this.res.statusCode = 403
            return this.res.view('unregistered/notfound', {data: 'Username or Password not found. Please try again!'})
            // return this.res.forbidden(); // respond with not matching username / password
        }
            }
          
        }
        // here we answer to the already logged in user
        if(this.req.session.userId !== undefined && this.req.method !== 'POST') {
            console.log('login2_else');
            return this.res.redirect('/controlpanel');
        }
       
 
    }
}