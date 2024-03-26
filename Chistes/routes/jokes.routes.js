const express = require("express");

const { 
    createNewJokes,
    getAllJokess,
    getOneJokesById,
    updateOneJokesById,
    deleteOneJokesById,
    deleteAllJokess,
    getRandomJokes
} = require("../controllers/jokes.controller");

const JokesRouter = express.Router();

//API/JOKESS/
JokesRouter.get("/", getAllJokess);
JokesRouter.get("/:id", getOneJokesById);
JokesRouter.post("/new/", createNewJokes);
JokesRouter.put("/update/:id", updateOneJokesById);
JokesRouter.delete("/delete/:id", deleteOneJokesById);
JokesRouter.delete("/", deleteAllJokess);
JokesRouter.get("/random/", getRandomJokes);

module.exports = JokesRouter;