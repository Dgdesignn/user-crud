const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {});
        console.log(`Conectado com :: ${connection.connection.db.databaseName}`);
    } catch (error) {
        console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = connectDB;