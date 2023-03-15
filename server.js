const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')

const cors = require('cors');
app.use(cors())


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static(path.join(__dirname, "public")))

const passport = require("passport")
const expressSession = require("express-session")
const { initializingPassport, isAuthenticated } = require('./middleware/adminlogin')
const { initializingPassportUser, isAuthenticatedUser } = require('./middleware/userlogin')

initializingPassportUser(passport)


app.use(expressSession({ secret: 'anyting', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())


app.use(passport.initialize())
app.use(passport.session())



const router = require('./routes/index.js')
app.use(router)

const userrouter = require('./routes/user.js')
app.use(userrouter)

app.use('/Images', express.static('./Images'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})