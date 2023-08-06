const { ProductTags } = require('../models');

const productTagData = [
  {
    productId: 1,
    tagId: 1,
  },
  {
    productId: 1,
    tagId: 5,
  },
  {
    productId: 2,
    tagId: 3,
  },
  {
    productId: 2,
    tagId: 4,
  },
  {
    productId: 3,
    tagId: 1,
  },
  {
    productId: 3,
    tagId: 6,
  },
  {
    productId: 4,
    tagId: 3,
  },
  {
    productId: 4,
    tagId: 1,
  },
  {
    productId: 4,
    tagId: 5,
  },
];

const seedProductTags = () => ProductTags.bulkCreate(productTagData);

module.exports = seedProductTags;
