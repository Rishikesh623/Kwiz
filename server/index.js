const express = require("express");
const mongoose  = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const userRouter = require("./Routes/userRoutes");
const quizRouter = require("./Routes/quizRoutes");

const port = process.env.PORT ;  //use PORT in deployment case
const uri = process.env.ATLAS_URI; //for accessing mongoDB 

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter); // user router files 
app.use(quizRouter);

//express server
app.listen(port,() => {
    console.log(`Server is running at PORT ${port}`);
})

//mongoDB connection established
mongoose.connect(uri)
    .then(() => console.log("MonogDB connected .. ") )
    .catch((error) => console.log("Mongo connection failed !!! ",error.message));

