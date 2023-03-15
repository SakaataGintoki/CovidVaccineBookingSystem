module.exports = (sequelize, DataTypes) => {
    const booked = sequelize.define('booking', {

        fullname: {
            type: DataTypes.STRING,
        },
        dateofbirth: {
            type: DataTypes.STRING,
        },
        phonenumber: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        whom: {
            type: DataTypes.STRING,
        },

        dose: {
            type: DataTypes.STRING,
        },
        bdate: {
            type: DataTypes.STRING,
        },
        addplaceId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'addplaces',
                key: 'id'
            }
        }

    }, {
        createdAt: false,
        updatedAt: false

    })
    return booked

}