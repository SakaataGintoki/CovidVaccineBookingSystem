const express = require('express');
const router = express.Router();




const upload = require('../middleware/newsimages')
const uploadupdate = require('../middleware/newsimages')

const mainController = require('../controllers/mainController')
const newsController = require('../controllers/newsController')
router.get('/admin/', mainController.getindex)


router.get('/admin/addplaces', mainController.getplaces)
router.post('/newplaces', mainController.postplaces)

router.get('/admin/updateplace/:id', mainController.getupdatepage)
router.post('/admin/updateplacesdata/:id', mainController.postupdatedata)

// newsportal
router.get('/admin/newsportal', newsController.getnewsportal)
router.post('/postnewsportal', upload.single('newsimages'), newsController.postnewsportal)
router.get('/admin/news', newsController.getnews)
router.get("/delete/:id", newsController.getdelete)
router.get('/edit/:id', newsController.geteditpage)
router.post('/editpostnewsportal/:id', uploadupdate.single('newsimagesupdate'), newsController.editpagepost)




router.get('/admin/bookingDetails', mainController.getdetails)


router.get('/admin/viewplaces', mainController.getviewplaces)


router.get('/admin/viewuser', mainController.getuser)



const passport = require('passport')
const { initializingPassport, isAuthenticated } = require('../middleware/adminlogin')
const { initializingPassportUser, isAuthenticatedUser } = require('../middleware/userlogin')


const logincontroller = require('../controllers/login')
router.get('/user/login', logincontroller.getuserloginpage)
router.post('/userlogindetails', passport.authenticate("local", {
    failureRedirect: "/user/login",
    session: true
}), logincontroller.postuserlogin)



router.get('/admin/login', logincontroller.getadminloginpage)
router.post('/adminlogindata', logincontroller.postadminlogin)



router.get('/user/register', logincontroller.getregisterpage)
router.post('/registeruserdetails', logincontroller.postregisterpage)


router.get('/deleteuser/:id', mainController.getuserdelete)

module.exports = router;