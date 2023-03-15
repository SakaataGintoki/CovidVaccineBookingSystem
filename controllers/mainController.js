const db = require('../models')
const AddPlace = db.addplace
const UserRegister = db.userregister
const bookeduser = db.booking
const newsmodel = db.newsportal
exports.getindex = async(req, res, next) => {
    res.render('admin/index')
}



exports.getplaces = (req, res, next) => {

    res.render('admin/addplaces')
}
exports.postplaces = async(req, res, next) => {
    try {
        const placesdetails = {
            placename: req.body.placename,
            cityname: req.body.cityname,
            availabletime: req.body.availabletime,
            vaccinename: req.body.vaccinename,
            vaccineslot: req.body.vaccineslot,
            vaccinedetails: req.body.vaccinedetails
        }
        const addplaces = await AddPlace.create(placesdetails)
        console.log("added places")
        res.redirect('/admin/addplaces')
    } catch (err) {
        console.log("Error find" + err)
    }


}


exports.getdetails = async(req, res, next) => {
    const abc = await bookeduser.findAll({})
    console.log(abc)
    res.render('admin/bookingDetails', { abc })
}
exports.getviewplaces = async(req, res, next) => {
    const allplaces = await AddPlace.findAll({})
        .then(allplaces => {
            res.render('admin/viewplaces', {
                allplaces
            })
        }).catch(err => {
            console.error(err)
        })
}

exports.getuser = async(req, res, next) => {
    const allusers = await UserRegister.findAll({})

    res.render('admin/viewuser', { allusers })
}
exports.getuserdelete = async(req, res, next) => {
    let id = await req.params.id
    const deleteu = UserRegister.destroy({ where: { id: id } })
        .then(() => {
            res.redirect('/admin/viewuser')
        }).catch(err => {
            console.log(err)
        })
}
exports.getupdatepage = async(req, res, next) => {
    const updateid = await req.params.id;
    const updateplaces = await AddPlace.findOne({ where: { id: updateid } })
    res.render('admin/editaddplaces', { updateplaces })
}
exports.postupdatedata = async(req, res, next) => {
    const updateid = await req.params.id;
    const placesdetails = {
        placename: req.body.placename,
        cityname: req.body.cityname,
        availabletime: req.body.availabletime,
        vaccinename: req.body.vaccinename,
        vaccinedetails: req.body.vaccinedetails
    }
    const updatedata = AddPlace.update(placesdetails, { where: { id: updateid } })
    res.redirect('/admin/viewplaces')
}