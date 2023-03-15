const dbConfig = require('../config/dbConfig.js')

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: 0,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
    .then(() => {
        console.log(' connected with sequelize')
    }).catch(err => {
        console.log("error" + err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.addplace = require('./addplaces.js')(sequelize, DataTypes)
db.userregister = require('./register')(sequelize, DataTypes)
db.admin = require('./admin')(sequelize, DataTypes)
db.booking = require('./booking')(sequelize, DataTypes)


db.addplace.hasMany(db.booking);
db.booking.belongsTo(db.addplace);



db.newsportal = require('./news.js')(sequelize, DataTypes)
db.sequelize.sync({ force: false })
    .then(() => {
        console.log("re-sync done")
    }).catch(err => {
        console.log("error", err)
    })
module.exports = db