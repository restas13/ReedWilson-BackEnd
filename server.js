//importing express and sequelize
const express = require('express');
const sqlize = require('./config/connection.js');

// getting the routes from the routes folder
const routes = require('./routes');

// setting the app and port variable for the application to run
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
// Custom routes middleware
app.use(routes);

// Suncing sequelize and waiting for the app to run
sqlize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`application is running on port ${PORT}`);
    })
})