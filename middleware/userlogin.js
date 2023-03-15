const LocalStrategy = require('passport-local')
const db = require('../models/index')
const User = db.userregister

exports.initializingPassportUser = (passport) => {
    passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password', passReqToCallback: true }, async(req, email, password, done) => {
        const user = await User.findOne({ where: { email } });
        try {
            if (!user) return done(null, false);
            if (user.password !== password) return done(null, false);
            return done(null, user)
        } catch (err) {
            return done(err, false)
        }
    }))
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser(async(id, done) => {
        try {
            const user = await User.findByPk(id);
            done(null, user);
        } catch (err) {
            done(err, false)
        }
    })

}

exports.isAuthenticatedUser = (req, res, next) => {

    if (req.user) return next();

    res.redirect("/user/login")
}