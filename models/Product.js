const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Product extends Model { };

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 5,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                key: 'id',
                model: 'categories',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;