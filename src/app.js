const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/Database');
const userRouter = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api", userRouter)


module.exports = app;