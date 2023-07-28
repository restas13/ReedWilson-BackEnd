//importing the router
const router = require('express').Router();

//importing the routes
const tags = require('./tag-routes');
const products = require('./product-routes');
const categories = require('./category-routes');

//using the routes 
router.use('/categories', categories);
router.use('/tags', tags);
router.use('/products', products);

module.exports = router;