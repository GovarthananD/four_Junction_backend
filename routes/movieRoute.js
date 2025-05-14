import express from "express";
import { Movies } from "../modal/moviesModal.js";
import { authorization } from "./authorization.js";

const router = express.Router();

router.post("/addMovie",authorization, async (req, res) => {
    try{
        const movie = await Movies.create(req.body);
        res.status(201).json(movie);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
});

router.get("/getMovies", async (req, res) => {
    try{
        const getMovies = await Movies.find();
        res.status(201).json(getMovies);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try{
        const movie = await Movies.findById(req.params.id);
        if(!movie) return res.status(404).json({ error: 'Movie not found' });
        res.json(movie);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
});

router.put("/:id",authorization, async (req, res) => {
    try{
        const editMovie = await Movies.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!editMovie) return res.status(404).json({ error: 'Movie not found' });
        res.json(editMovie);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
});

router.delete("/:id",authorization, async (req, res) => {
    try{
        const remove = await Movies.findByIdAndDelete(req.params.id);
        if(!remove) return res.status(404).json({ error: 'Movie not found' });
        res.json(remove);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
});

router.get("/getMovies/week", async (req, res) => {
    try{
       const movies= await Movies.find({type:"week"});
       res.json(movies);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
});

router.get("/getMovies/series", async (req, res) => {
    try{
       const movies= await Movies.find({type:"Series"});
       res.json(movies);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
});





export const moviesRoute = router;