const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/Database');
const userRouter = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require("cookie-parser");
const authMiddleware = require("./middleware/authMiddleware");
const app = express();

dotenv.config();
connectDB();

app.use(cookieParser())
app.use(express.json());



app.use("/api", userRouter);
app.use("/api/auth", authRoutes);


module.exports = app;