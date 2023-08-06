const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.json({ message: "Uh oh, you're not supposed to be here" });
})

module.exports = router;