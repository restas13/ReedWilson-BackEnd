//importing the router and the models needed for the route
const router = require('express').Router();
const { Categories, Products } = require('../../models');

//Post route for adding a category
router.post('/', (req, res) => {
    Categories.create(req.body)
    //returning the categories if they af=re found, and reeturning an error if there is an error or there is no db/table
        .then((category) => res.status(200).json(category))
        .catch((err) => res.status(400).json(err));
});

// Put route for editing a category
router.put('/:id', (req, res) => {
    console.log(req.body);
    Categories.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    //returning the categories if they af=re found, and reeturning an error if there is an error or there is no db/table
        .then((category) => res.status(200).json(category))
        .catch((err) => res.status(400).json(err));
});

// Get route gets all categories
router.get('/', (req, res) => {
    Categories.findAll({
        include: [Products],
    })
    // returning the categories if they af=re found, and reeturning an error if there is an error or there is no db/table
        .then((categories) => res.json(categories))
        .catch((err) => res.status(500).json(err));
});

// Get route for specific category (found by id)
router.get('/:id', (req, res) => {
    Categories.findOne({
        where: {
            id: req.params.id,
        },
        include: [Products],
    })
    //returning the categories if they af=re found, and reeturning an error if there is an error or there is no db/table
        .then((category) => res.json(category))
        .catch((err) => res.status(400).json(err));
});


// Delete route for getting rid of a category
router.delete('/:id', (req, res) => {
    Categories.destroy({
        where: {
            id: req.params.id,
        },
    })
    //returning the categories if they af=re found, and reeturning an error if there is an error or there is no db/table
        .then((category) => res.status(200).json(category))
        .catch((err) => res.status(400).json(err));
});

module.exports = router;
