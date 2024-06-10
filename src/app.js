const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/Database');
const userRouter = require('./routes/userRoutes');
const setHeaders = require('./middleware/setHeader');
const cookieParser = require("cookie-parser");
const userAuthmiddleware = require("./middleware/userAuth");
const app = express();

dotenv.config();
connectDB();

app.use(cookieParser())
//app.use(setHeaders);
app.use(express.json());





app.use("/api", userRouter);


module.exports = app;