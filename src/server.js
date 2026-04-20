import express from 'express';
import movieRoutes from './routes/movieRoutes.js';
import dotenv from 'dotenv';
import { connectDB, disconnectDB } from './config/db.js';

dotenv.config();

const app = express();
connectDB();


//middlewares
app.use(express.json());

//API routes
app.use("/api/movies", movieRoutes);

app.get("/", (req, res)=>{
    res.json({message: "Hello, World!"});
})


const PORT = 5001
app.listen(PORT, ()=>{
console.log(`Server running on port ${PORT}`);
});


process.on("unhandledRejection", (err)=>{
    console.error("Unhandled Rejection:", err);
    server.close(async()=>{
        await disconnectDB();
        process.exit(1);
    })
});


process.on("uncaughtException", async  (err)=>{
    console.error("Uncaught Exception:", err);
    await disconnectDB();
    process.exit(1);
});

process.on("uncaughtException", async(err)=>{
    console.error("Uncaught Exception", err);
    await disconnectDB();
    process.exit(1);
})


process.on("SIGTERM", async ()=> {
    console.log("SIGTERM received, shutting down gracefully...");
    server.close(async()=>{
        await disconnectDB();
        process.exit(0);
    })
});

// GET POST PUT  DELETE



















