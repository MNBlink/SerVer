module.exports = ( sequelize, DataTypes ) => {
    const Blog = sequelize.define('Blog', {
        title: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.STRING,
        content: DataTypes.STRING,
        category: DataTypes.STRING,
        status: DataTypes.STRING,
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        data: DataTypes.STRING
    })
    return Blog
}