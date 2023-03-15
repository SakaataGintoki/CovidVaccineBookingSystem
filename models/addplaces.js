module.exports = (sequelize, DataTypes) => {
    const newplace = sequelize.define('addplace', {
        placename: {
            type: DataTypes.STRING
        },
        cityname: {
            type: DataTypes.STRING
        },
        availabletime: {
            type: DataTypes.STRING
        },
        vaccinename: {
            type: DataTypes.STRING
        },
        vaccineslot: {
            type: DataTypes.STRING
        },
        vaccinedetails: {
            type: DataTypes.STRING
        }
    }, {
        createAt: false,
        updatedAt: false
    })
    return newplace

}