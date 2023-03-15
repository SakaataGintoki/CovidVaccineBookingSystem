const req = require('express/lib/request')
const db = require('../models')
const AddPlace = db.addplace
const Booking = db.booking
const newsmodel = db.newsportal


exports.getNews = async(req, res, next) => {
    const uploadimage = await newsmodel.findAll({})
    res.render("default/news", { uploadimage })
}

// const User = db.users
exports.getindex = async(req, res, next) => {
    const allnews = await newsmodel.findAll({})

    res.render('default/index.ejs', { allnews })
    console.log(allnews)
}
exports.getvaccinating = (req, res, next) => {
    res.render('default/map')
}
exports.getcovidpatient = (req, res, next) => {
    res.render('default/Peoplenearby')
}


exports.getvaccine = (req, res, next) => {
    res.render("default/AboutVaccine")
}
exports.getprevention = (req, res, next) => {
    res.render("default/Prevention")
}
exports.getsymptoms = (req, res, next) => {
    res.render("default/Symptoms")
}

exports.getwelcomeregisterpage = (req, res, next) => {
    res.render("default/welcomeregister")
}

exports.gethistorypage = async(req, res, next) => {
    const ruser = await req.user
    console.log("re user is ", ruser)
    const allbookinglist = await Booking.findAll({})

    res.render("user/ownprofie/history", { ruser, allbookinglist })
}
exports.deletehistory = async(req, res, next) => {
    const did = req.params.id
    const deleterhistory = Booking.destroy({ where: { id: did } })
    res.redirect('/history')
}


exports.getuserprofile = async(req, res, next) => {
    const ruser = await req.user
    console.log("re user is ", ruser)

    const placename = await AddPlace.findAll({})


    res.render("user/ownprofie/userprofile", { ruser, placename })
}

const nodemailer = require('nodemailer');
const crd = require('../creat')

const mail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: crd.user,
        pass: crd.pass
    }
});



let rvaccineid;
exports.getcovidbooking = (req, res, next) => {
    rvaccineid = req.params.id
    console.log("haha", rvaccineid)
    res.render("user/ownprofie/covidbooking")
}

exports.postbooking = async(req, res, next) => {
    console.log("haha", rvaccineid)
    let bookingdetails = {
        fullname: req.body.fullname,
        dateofbirth: req.body.dateofbirth,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        gender: req.body.gender,
        whom: req.body.whom,
        dose: req.body.dose,
        bdate: req.body.bdate,
        addplaceId: rvaccineid
    }
    console.log(bookingdetails)

    const booking = Booking.create(bookingdetails)
        .then(ab => {
            let Fullname = req.body.fullname
            const emailid = req.body.email
            const bdate = req.body.bdate
            let place = rvaccineid.placename
            console.log(Fullname)
         
            
            mail.sendMail({
                from: 'team@gmail.com',
                to: emailid,
                subject: "Vaccine Booked",
                html: '<h1>Hello</h1>'+ [Fullname] + '<br> <br> You have Booked a vaccine for  ' + bdate + '<br> AT'+[place]+'<br> Thank you'
            })
            res.redirect('/userprofile')

        }).catch(err => {
            console.error(err)
        })
}