module.exports = async function(req, res, proceed) {
    console.log(req.session)
    if(req.session.userId !== undefined) {
        
        return res.view("registered/registered");
        
    }
    // alternative approach
    // res.statusCode = 498;
    return proceed();
    // return res.forbidden();
} 