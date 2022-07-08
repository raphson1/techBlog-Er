const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Blog extends Model {}

Blog.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
        type: DataTypes.STRING,
        allowNull: false,
        }, 
        description: {
            type: Datatypes.INTEGER,
            allowNull: false,
        },
        date_created: {
            type: Datatypes.DATE,
            allowNull: false,
            defaultValue: Datatypes.NOW
        },
        user_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored:true,
    modelName: 'blog'
}
);

module.exports = Blog;
    