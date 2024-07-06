const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/Database');
const userRouter = require('./routes/userRoutes');
const cookieParser = require("cookie-parser");
const userAuthmiddleware = require("./middleware/userAuth");
const app = express();

dotenv.config();
connectDB();

app.use(cookieParser())
app.use(express.json());



app.use("/api", userRouter);


module.exports = app;