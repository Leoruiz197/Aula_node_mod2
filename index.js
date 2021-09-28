const express = require("express");
const app = express();

app.get("/", function (req, res){
    res.send("hello bluemer");
});

app.get("/teste", function (req, res){
    res.send("esse é um teste");
});

app.get("/teste2", function (req, res){
    res.send("esse é outro teste");
});

// app.post
// app.put
// app.delete

app.listen(3000);