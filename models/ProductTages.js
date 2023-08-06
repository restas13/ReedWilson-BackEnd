const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const { INTEGER } = require('sequelize');

class ProductTag extends Model { };

ProductTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        productId: {
            type: DataTypes.INTEGER,
            references: {
                key: 'id',
                model: 'product',
            },
        },
        tagId: {
            type: DataTypes.INTEGER,
            references: {
                key: 'id',
                model: 'tag',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: true,
        modelName: 'product_tag',
    }
);

module.exports = ProductTag;