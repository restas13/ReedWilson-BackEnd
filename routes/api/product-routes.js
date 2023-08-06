//Imports the router and the models needed for the returning product data
const router = require('express').Router();
const { Products, Categories, Tags, ProductTags } = require('../../models');


// Creates a new product using the request body
router.post('/', (req, res) => {
    console.log(req.body);
    Products.create(req.body)
        .then((product) => {

            if (req.body.tagIds && req.body.tagIds.length) {
                const productTagIdArr = req.body.tagIds.map((tag_id) => {
                    return {
                        product_id: product.id,
                        tag_id,
                    };
                });
                return ProductTags.bulkCreate(productTagIdArr);
            }

            res.status(200).json(product);
        })
        .then((productTagIds) => res.status(200).json(productTagIds))
        .catch((error) => {
            console.log(err);
            res.status(400).json(error);
        });
});

// Used for updating a product
router.put('/:id', (req, res) => {
    console.log(req.body);
    Products.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((product) => {
            if (req.body.tagIds && req.body.tagIds.length) {
                const productTags = ProductTags.findAll({
                    where: { product_id: req.params.id }
                });
                const productTagIds = productTags.map(({ tag_id }) => tag_id);

                const newProductTags = req.body.tagIds
                    .filter((tag_id) => !productTagIds.includes(tag_id))
                    .map((tag_id) => {
                        return {
                            product_id: req.params.id,
                            tag_id,
                        };
                    });

                const productTagsToRemove = productTags
                    .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
                    .map(({ id }) => id);


                return Promise.all([
                    ProductTags.destroy({ where: { id: productTagsToRemove } }),
                    ProductTags.bulkCreate(newProductTags),
                ]);
            }

            return res.json(product);
        })
        .catch((error) => {
            console.log('put failed');
            res.status(400).json(error);
        });
});

// Gets all products
router.get('/', (req, res) => {
    Products.findAll({
        include: [
            Categories,
            {
                model: Tags,
                through: ProductTags,
            },
        ],
    })
        .then((products) => res.json(products))
        .catch((error) => {
            console.log(error);
            res.status(500).json(error);
        });
});

// Gets an individual product
router.get('/:id', (req, res) => {
    Products.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            Categories,
            {
                model: Tags,
                through: ProductTags,
            },
        ],
    })
        .then((products) => res.json(products))
        .catch((error) => {
            console.log(error);
            res.status(400).json(error);
        });
});



router.delete('/:id', (req, res) => {
    Products.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((products) => {
            console.log(products);
            res.json(products);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(error);
        });
});

module.exports = router;
