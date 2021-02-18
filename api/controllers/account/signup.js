module.exports = {

  exits: {
    success: {
      viewTemplatePath: 'account/signup'
    }  
  },
  fn: async function() {
    if (this.req.session.userId) {
            return this.res.redirect('/controlpanel')
        }
        return { data: '' }
}
}

