import express from 'express';
import movieRoutes from './routes/movieRoutes.js';

const app = express();

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

// GET POST PUT  DELETE



















