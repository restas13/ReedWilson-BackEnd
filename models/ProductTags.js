const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { };

ProductTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                key: 'id',
                model: 'product',
            },
        },
        tag_id: {
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