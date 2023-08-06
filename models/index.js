const Products = require('./Product');
const ProductTags = require('./ProductTags');
const Categories = require('./Category');
const Tags = require('./Tags');

// Links products under the categories 
Products.belongsTo(Categories, {
    foreignKey: 'category_id',
});

// Products can belong to many tags through productTags
Products.belongsToMany(Tags, {
    through: ProductTags,
    foreignKey: 'product_id',
});

// States categories have products within them
Categories.hasMany(Products, {
    foreignKey: 'category_id',
});

// tags belong to many products through productTags
Tags.belongsToMany(Products, {
    through: ProductTags,
    foreignKey: 'tag_id',
});

// Exports the models
module.exports = { Products, ProductTags, Categories, Tags };