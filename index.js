const express = require("express");
const mongoose = require("mongoose");
const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD } = require("./config/config");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));