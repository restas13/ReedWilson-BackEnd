const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Category extends Model { };

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            required: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName:'categories',
    }
);

module.exports = Category;