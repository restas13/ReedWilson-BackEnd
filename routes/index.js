// importing the router and the api routes
const router = require('express').Router();
const apiRoutes = require('./api');

// Using the api folder
router.use('/api', apiRoutes);

// Returning a message if the user ends up in the wrong route
router.use((req, res) => {
    res.json({ message: "Uh oh, you're not supposed to be here" });
})

// exports the oruter
module.exports = router;