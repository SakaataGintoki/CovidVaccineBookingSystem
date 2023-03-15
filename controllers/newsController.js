const { newsportal } = require('../models')
const db = require('../models')

const news = db.newsportal

exports.getnews = async(req, res, next) => {
    const portal = await news.findAll({})
        .then(uploadimage => {
            res.render("default/news", {
                uploadimage
            })
        }).catch(error => {
            console.error(error)
        })
}
exports.getnewsportal = async(req, res, next) => {
    const abc = await news.findAll({})
        .then(uploadimage => {
            res.render("admin/newsportal", {
                uploadimage
            })
        }).catch(error => {
            console.error(error)
        })
}

exports.postnewsportal = async(req, res, next) => {
    try {
        const newsdetails = {
            image: req.file.filename,
            title: req.body.title,
            description: req.body.description
        }
        const addnews = await news.create(newsdetails)
        console.log(addnews)
        res.redirect('/admin/newsportal')
    } catch (err) {
        console.log("Error find" + err)
    }
}

exports.getdelete = (req, res, next) => {
    const rid = req.params.id

    const deletedata = news.destroy({ where: { id: rid } })
    res.redirect('/admin/newsportal')

}

exports.geteditpage = async(req, res, next) => {
    const reqid = req.params.id
    const allnews = await news.findOne({ where: { id: reqid } })

    res.render('admin/editnews.ejs', { allnews })
    console.log(allnews)
}
exports.editpagepost = (req, res, next) => {
    console.log(req.params.id)

    const rrid = req.params.id
    let updatenews = {
        image: req.file.filename,
        title: req.body.title,
        description: req.body.description
    }
    const update = news.update(updatenews, { where: { id: rrid } })
    res.redirect('/admin/newsportal')

}