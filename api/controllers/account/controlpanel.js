module.exports = {
    // exits: {
    //     success: {
    //         viewTemplatePath: 'account/controlpanel'
    //     }
    // },

    fn: async function() {
        if(this.req.session.userId == undefined) {
            return this.res.redirect('/')
        } else {
            return this.res.view('account/controlpanel')
        }
       
    }
}