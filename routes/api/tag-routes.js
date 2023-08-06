const router = require('express').Router();
const { Tags, Products, ProductTags } = require('../../models');

// Makes a new tag
router.post('/', (req, res) => {
    Tags.create(req.body)
        .then((tag) => res.status(200).json(tag))
        .catch((error) => {
            res.status(500).json(error)
        });
});

// Updates a tag
router.put('/:id', (req, res) => {
    Tags.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((tag) => res.status(200).json(tag))
        .catch((error) => {
            res.status(500).json(error)
        });
});

// Get all tags
router.get('/', (req, res) => {
    Tags.findAll({
        include: [
            {
                model: Products,
                through: ProductTags,
            },
        ],
    })
        .then((tag) => res.status(200).json(tag))
        .catch((error) => {
            res.status(500).json(error)
        });


});

// Get a spcecific tag
router.get('/:id', (req, res) => {
    Tags.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Products,
                through: ProductTags,
            },
        ],
    })
        .then((tag) => res.status(200).json(tag))
        .catch((error) => {
            res.status(500).json(error)
        });
});

// delete a tag
router.delete('/:id', (req, res) => {
    Tag.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((tag) => res.status(200).json(tag))
        .catch((error) => {
            res.status(500).json(error)
        });
});


module.exports = router;