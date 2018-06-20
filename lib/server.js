import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import noteRoute from '../app/routes/note.routes.js'

dotenv.config()

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'));


// app.use(cors());  

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const PORT = process.env.PORT || 4000
const DB_HOST = process.env.DB_HOST

// Configuring the database
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(DB_HOST)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to BezopShop application."});
});

// Require Notes routes
app.use('/api/v1', noteRoute);

// listen for requests
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

export default app