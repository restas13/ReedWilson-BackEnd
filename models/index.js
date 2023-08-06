const Products = require('./Product');
const ProductTags = require('./ProductTages');
const Categories = require('./Category');
const Tags = require('./Tags');

// Links products under the categories 
Products.belongsTo(Categories, {
    foreignKey: 'categoryId',
});

// Products can belong to many tags through productTags
Products.belongsToMany(Tags, {
    through: ProductTags,
    foreignKey: 'productId',
});

// States categories have products within them
Categories.hasMany(Products, {
    foreignKey: 'categoryId',
});

// tags belong to many products through productTags
Tags.belongsToMany(Products, {
    through: ProductTags,
    foreignKey: 'tagId',
});

// Exports the models
module.exports = { Products, ProductTags, Categories, Tags };