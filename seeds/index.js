const seedProducts = require('./product-seeder.js');
const seedProductTags = require('./product-tag-seeder');
const seedCategories = require('./category-seeder');
const seedTags = require('./tags-seeder');

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
