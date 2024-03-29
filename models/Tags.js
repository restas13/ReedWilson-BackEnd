const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Tag extends Model { };

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: `tag`,
    }
);

module.exports = Tag;