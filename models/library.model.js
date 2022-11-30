
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Library', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
