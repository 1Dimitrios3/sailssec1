module.exports = async function (req, res, proceed) {
    console.log("logged out")
    if (req.session.userId !== undefined) {
        return proceed();
    }
    // res.statusCode = 498
    return res.redirect("/login")
    // return res.forbidden();
}