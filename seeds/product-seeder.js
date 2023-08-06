const { Products } = require('../models');

const ProductData = [
    {
        name: 'Dress Pants',
        price: 34.99,
        stock: 10,
        categorId: 1,
    },
    {
        name: 'Sketchers',
        price: 25.00,
        stock: 17,
        categorId: 2,
    },
    {
        name: 'Pumba Socks',
        price: 12.59,
        stock: 20,
        categorId: 3,
    },
    {
        name: 'Nike Shirt',
        price: 10.99,
        stock: 6,
        categorId: 4,
    },
];

const seedProducts = () => {
    Products.bulkCreate(ProductData);
}

module.exports = seedProducts;