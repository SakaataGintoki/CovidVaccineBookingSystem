module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('userregister', {
        citizenshipid: {
            type: DataTypes.STRING
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },

        password: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        }
    }, {
        createdAt: false,
        updatedAt: false

    })
    return user

}