const db = require('../models/index')
const registerUser = db.userregister
const Admin = db.admin

exports.getuserloginpage = (req, res, next) => {
    res.render("login/login")
}
exports.getadminloginpage = (req, res, next) => {
    res.render("login/adminlogin")
}
exports.getregisterpage = (req, res, next) => {
    res.render('login/register', { repeatcitizen: false, repeatemail: false })
}

exports.postregisterpage = async(req, res, next) => {
    const repeatcitizen = await registerUser.findOne({ where: { citizenshipid: req.body.citizenshipid } })
    console.log(repeatcitizen)
    if (repeatcitizen == null) {

        const reemail = await registerUser.findOne({ where: { email: req.body.email } });
        if (reemail == null) {
            let userdetails = await {
                citizenshipid: req.body.citizenshipid,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                date: req.body.dateofbirth,
                gender: req.body.gender
            }
            const registeruser = registerUser.create(userdetails)
                .then(abc => {
                    res.redirect('/user/login')
                })

        } else {
            console.log("aaaa")
            res.render('login/register', { repeatcitizen: false, repeatemail: true })

        }

    } else {
        console.log(repeatcitizen)
        res.render('login/register', { repeatcitizen: true, repeatemail: false })

    } // if (repeatcitizen = "null") {
    //     console.log("haha")
    // } else(
    //     console.log("asfa")
    // )

    // let userdetails = await {
    //     citizenshipid: req.body.citizenshipid,
    //     firstname: req.body.firstname,
    //     lastname: req.body.lastname,
    //     email: req.body.email,
    //     password: req.body.password,
    //     date: req.body.dateofbirth,
    //     gender: req.body.gender
    // }
    // const registeruser = registerUser.create(userdetails)
    //     .then(abc => {
    //         res.redirect('/user/login')
    //     })
}

exports.postuserlogin = (req, res, next) => {
    //console.log("adf")
    res.redirect('/userprofile')
}
exports.postadminlogin = async(req, res, next) => {
    const admin = await Admin.findAll({})
    console.log(admin)
    let realpassword;
    let realemail;
    for (let i = 0; i < admin.length; i++) {
        realpassword = admin[i].password
        realemail = admin[i].email
    }
    if (realemail == req.body.email && realpassword == req.body.password) {
        res.redirect('/admin/')
    } else {
        res.redirect("admin/login")

    }




}