const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const { mongoose } = require("./database");
//Settings
app.set("port", process.env.PORT || 3000);
//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/", require('./routes/videos'));
app.use("/", require('./routes/image'));
app.use("/", require('./routes/upload'));
app.use("/", require('./routes/stream'));
//Static files
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(app.get("port"), ()=>{
    console.log(`Server on port ${app.get("port")}`);
})