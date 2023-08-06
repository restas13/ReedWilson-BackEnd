const seedProducts = require('./product-seeds');
const seedProductTags = require('./product-tag-seeds');
const seedCategories = require('./category-seeds');
const seedTags = require('./tag-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedProducts();
    await seedProductTags();
    await seedCategories();
    await seedTags();

    console.log('Database Seeded');
    process.exit(0);
};

seedAll();
