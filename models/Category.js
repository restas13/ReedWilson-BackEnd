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
            autoIncrement: true,
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
        freezeTableName: true,
        modelName:'categories',
    }
);

module.exports = Category;