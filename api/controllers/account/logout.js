module.exports={
    exits:{
        success:{
            // viewTemplatePath:"pages/homepage"
        }
    },
    fn: async function(){
       console.log(this.req.session)
       if(this.req.session.userId !== undefined) {
           this.req.session.destroy()
           return this.res.redirect('/')
       }
       // delete this.req.session.userId
       console.log(this.req.session.userId)

        return this.res.redirect('/')
    }
}

// logout: function(req, res) {
//     req.session.destroy(function(err) {
//          return res.view('/logout');
//     });
// }