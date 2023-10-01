const express = require('express');
const app = express();

const bodyParser = require('body-parser');



const apiRoutes = require('./routes/index');
const {PORT, FLIGHT_SERVICE_PATH} = require('./config/serverConfig');

const db = require('./models/index');

const setupAndStartServer = () => {
    app.listen(PORT, () => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));


        app.use('/api', apiRoutes);

        // if(process.env.DB_SYNC === 'true') {
        //     db.sequelize.sync({alter: true})
        // }

        // console.log(FLIGHT_SERVICE_PATH);
        console.log(`Server running on port ${PORT}`);
    });
}

setupAndStartServer();