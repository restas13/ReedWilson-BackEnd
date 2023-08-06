const { Categories } = require('../models');

const categoryData = [
    {
        name: 'Pants'
    },
    {
        name: 'Shoes'
    },
    {
        name: 'Socks'
    },
    {
        name: 'Shirts'
    }
];

const seedCategories = () => {
    Categories.bulkCreate(categoryData);
}

module.exports = seedCategories;