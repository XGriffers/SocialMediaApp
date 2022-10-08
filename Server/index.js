import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';

//Routers Import
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';

//Middleware
const app = express();
app.use(bodyParser.json({limit:'30mb', extended: true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}));

dotenv.config()
mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> 
app.listen(process.env.PORT, () => 
console.log("Listening"))).catch((error)=>console.log(error));

//useage of routes
app.use('/auth', AuthRoute)
app.use('/user', UserRoute)