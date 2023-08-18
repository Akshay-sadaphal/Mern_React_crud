const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

const cors = require("cors");
app.use(cors());
const userRoute = require("./routes/userRoutes")

mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log("Connnected successFully...");
        app.listen(process.env.PORT || 8000, (err) => {
            if (err) console.log(err);
            console.log("running successfully at", process.env.PORT);
        });
    })
    .catch((error) => {
        console.error("error", error);
    });

app.use(userRoute);

