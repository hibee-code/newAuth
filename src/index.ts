import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from 'compression';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import router from "./router";


const app = express();
//env
dotenv.config();


//middleware
app.use(cors({
    credentials:true,
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(compression());

app.use("/",router());


const URI = process.env.CONNECTION_URI;

const PORT = process.env.PORT;

const connect = async () => {
 await mongoose.connect(URI,{dbName:"Auth_creaton"})
        .then((response) => app.listen((PORT), () => console.log(`Server listening on PORT ${PORT}`)))
        .catch((err:any) =>{console.log(`An error occurred while connecting to DB ${err}`)})
}

connect();






