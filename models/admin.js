module.exports = (sequelize, DataTypes) => {
    const admin = sequelize.define('admin', {
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING

        }

    }, {
        createdAt: false,
        updatedAt: false

    })
    return admin

}