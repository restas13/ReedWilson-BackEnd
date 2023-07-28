const express = require('express');
const sqlize = require('./config/connection.js');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(routes);
sqlize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`application is running on port ${PORT}`);
    })
})