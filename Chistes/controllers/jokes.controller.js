const JokesModel = require("../models/jokes.model");

module.exports = {
    getAllJokess: (req, res) => {
        JokesModel.find()
            .then((allJokess) => res.json({ jokes: allJokess }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    getOneJokesById: (req, res) => {
        JokesModel.findOne({ _id: req.params.id })
            .then((oneSingleJokes) => res.json({ jokes: oneSingleJokes }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    createNewJokes: (req, res) => {
        JokesModel.create(req.body)
            .then((newlyCreatedJokes) => res.json({ jokes: newlyCreatedJokes }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    updateOneJokesById: (req, res) => {
        JokesModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) // { new: true } -> returns updated document instead of original
            .then((updatedJokes) => res.json({ jokes: updatedJokes }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    deleteOneJokesById: (req, res) => {
        JokesModel.deleteOne({ _id: req.params.id })
            .then((result) => res.json({ result: result }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    deleteAllJokess: (req, res) => {
        JokesModel.deleteMany({})
            .then((result) => res.json({ result: result }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    getRandomJokes: (req, res) => {
        JokesModel.countDocuments()
            .then((totalJokes) => {
                const randomIndex = Math.floor(Math.random() * totalJokes);
                JokesModel.findOne().skip(randomIndex).exec()
                    .then((randomJokes) => res.json({ jokes: randomJokes }))
                    .catch((err) =>
                        res.json({ message: "Something went wrong", error: err })
                    );
            })
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
  
};
