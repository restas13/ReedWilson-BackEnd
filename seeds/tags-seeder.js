const { Tags } = require('../models');

const tagData = [
  {
    name: 'black',
  },
  {
    name: 'green',
  },
  {
    name: 'red',
  },
  {
    name: 'small',
  },
  {
    name: 'meduim',
  },
  {
    name: 'large',
  },
];

const seedTags = () => Tags.bulkCreate(tagData);

module.exports = seedTags;
