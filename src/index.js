import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.error("SERVER ERROR:", error);
            throw error;
        });
        app.listen(process.env.PORT || 8000, () => {
            console.log(`SERVER RUNNING AT PORT: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error("MONGODB CONNECTION ERROR:", error);
    });

{
    /*
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("App connection error:", error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`App listen on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("MONGO DB CONNECTION ERROR:", error);
        throw error;
    }
})();
*/
}
