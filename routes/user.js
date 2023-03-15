const express = require('express');
const router = express.Router();

const mainController = require('../controllers/usercontroller')
const { initializingPassport, isAuthenticated } = require('../middleware/adminlogin')
const { initializingPassportUser, isAuthenticatedUser } = require('../middleware/userlogin')

router.get('/', mainController.getindex)
router.get('/user/news', mainController.getNews)
router.get('/user/CovidPatient', mainController.getcovidpatient)
router.get('/user/VaccinatingCenters', mainController.getvaccinating)
router.get('/user/Prevention', mainController.getprevention)
router.get('/user/AboutVaccine', mainController.getvaccine)
router.get('/user/Symptoms', mainController.getsymptoms)

router.get('/user/welcomeregister', mainController.getwelcomeregisterpage)

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/')
})

router.get('/userprofile', isAuthenticatedUser, mainController.getuserprofile)
router.get('/history', isAuthenticatedUser, mainController.gethistorypage)
router.get('/historydelete/:id', mainController.deletehistory)
router.get('/covidbooking/:id', mainController.getcovidbooking)

router.post('/bookingdetails', mainController.postbooking)
module.exports = router;