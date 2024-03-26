
//server.js
const { PORT } = require("./config/settings");
const express = require("express");
const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/mongoose.config");

const JokesRouter = require("./routes/jokes.routes");
app.use("/api/jokess", JokesRouter);

const PetRouter = require("./routes/pets.routes");
app.use("/api/pets", PetRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
