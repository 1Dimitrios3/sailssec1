module.exports={
    exits:{
        success:{
            // viewTemplatePath:"pages/homepage"
        }
    },
    fn: async function(){
       console.log(this.req.session)
       delete this.req.session.userId
       console.log(this.req.session.userId)

        return this.res.redirect('/')
    }
}

// logout: function(req, res) {
//     req.session.destroy(function(err) {
//          return res.view('/logout');
//     });
// }