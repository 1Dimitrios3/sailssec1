module.exports = async function(req, res, proceed) {
    console.log("isLoggedIn")
    console.log(req.session);
    if(req.session.userId !== undefined) {
        console.log(req.session.userId);
        return proceed();
    }
    // alternative approach
    res.statusCode = 498;
    return res.view("pages/homepage", {data: "forbidden"})
    // return res.forbidden();
} 

