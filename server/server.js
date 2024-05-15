const { PORT } = require("./config/settings");
const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const corsOptions = {
    credentials: true, // Allow credentials (cookies) to be sent to/from origin
    origin: 'http://localhost:5173', // Allow only this origin
    methods: 'GET, POST, PUT, PATCH, DELETE', // Allow these methods
};

app.use(cors(corsOptions));

require("./config/mongoose.config");
require('./routes/product.routes')(app);



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));