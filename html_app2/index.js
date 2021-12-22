// imports
const express = require("express");
const os = require("os");

// vars
const PORT = 3000;

// setup
const app = express();
const hostname = os.hostname();

// endpoints
app.get("/", (req, res) => res.send(hostname));

// start
app.listen(PORT);
