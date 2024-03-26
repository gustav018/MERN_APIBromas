//mongoose.config.js
const mongoose = require("mongoose");
const db_name = "db_jokes";

//mongoose.connect(`mongodb://localhost/${db_name}`)
mongoose.connect(`mongodb://127.0.0.1/${db_name}`)

	.then(() => console.log(`establecido la conexión ${db_name}`))
	.catch(err => console.log(`No funciona ${db_name}`, err));
