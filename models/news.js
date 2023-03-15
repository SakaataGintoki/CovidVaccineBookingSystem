module.exports = (sequelize, DataTypes) => {
    const news = sequelize.define('newsportal', {
        image: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
    }, {
        createAt: false,
        updatedAt: false

    })
    return news

}