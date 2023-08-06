const { Products } = require('../models');

const ProductData = [
    {
        name: 'Dress Pants',
        price: 34.99,
        stock: 10,
        categoryId: 1,
    },
    {
        name: 'Sketchers',
        price: 25.00,
        stock: 17,
        categoryId: 2,
    },
    {
        name: 'Pumba Socks',
        price: 12.59,
        stock: 20,
        categoryId: 3,
    },
    {
        name: 'Nike Shirt',
        price: 10.99,
        stock: 6,
        categoryId: 4,
    },
];

const seedProducts = () => {
    Products.bulkCreate(ProductData);
}

module.exports = seedProducts;