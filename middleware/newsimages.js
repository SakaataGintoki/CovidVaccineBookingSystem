const multer = require('multer');

const path = require('path')


const storage = multer.diskStorage({
    destination: './public/Images/',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage,

    // fileFilter: (req, file, cb) => {
    //     const fileTypes = /jpeg|jpg|png|gif/
    //     const mimType = fileTypes.test(file.mimetype)
    //     const extname = fileTypes.test(path.extname(file.origialname))

    //     if (mimeType && extname) {
    //         return cb(null, true)
    //     }
    //     cb('Give proper files formate to upload')


})
const uploadupdate = multer({
    storage: storage,

    // fileFilter: (req, file, cb) => {
    //     const fileTypes = /jpeg|jpg|png|gif/
    //     const mimType = fileTypes.test(file.mimetype)
    //     const extname = fileTypes.test(path.extname(file.origialname))

    //     if (mimeType && extname) {
    //         return cb(null, true)
    //     }
    //     cb('Give proper files formate to upload')


})

module.exports = upload
module.exports = uploadupdate