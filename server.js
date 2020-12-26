const express = require("express");
const path = require("path");
const logger = require("logger");
const mongoose = require("moongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fastFIT", { useNewUrlParser: true});

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.listen(PORT, () => {
    console.log(`FastFIT App listening on port ${PORT} !`);
})