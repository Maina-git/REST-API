import express from "express";


const movieRoutes = express.Router();

movieRoutes.get("/", (req, res)=>{
    res.json({httpMethod:"GET"});
});

movieRoutes.post("/", (req, res)=>{
    res.json({httpMethod:"POST"});
});

movieRoutes.put("/", (req, res)=>{
    res.json({httpMethod:"PUT"});
});

movieRoutes.delete("/", (req, res)=>{
    res.json({httpMethod:"DELETE"});
});

export default movieRoutes;

