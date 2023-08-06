const router = require('express').Router();
const { Tags, Products, ProductTags } = require('../../models');

router.post('/', (req, res) => {
    Tags.create(req.body)
        .then((tag) => res.status(200).json(tag))
        .catch((err) => res.status(404).json(err));
});

router.put('/:id', (req, res) => {
    Tags.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((tag) => res.status(200).json(tag))
        .catch((err) => res.status(404).json(err));
});

router.get('/', (req, res) => {
    Tags.findAll({
        include: [
            {
                model: Products,
                through: ProductTags,
            },
        ],
    })
        .then((tags) => res.status(200).json(tags))
        .catch((err) => res.status(500).json(err));
});

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
        .catch((err) => res.status(404).json(err));
});


module.exports = router;