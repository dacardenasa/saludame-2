const express = require("express");
const app = express();
const capitalizeString = require("./capitalize");

app.get("/user/:name", (req, res) => {
  let reqParamName = req.params.name;
  if (!reqParamName) reqParamName = 'Desconocido!';
  res.send(`<h1>Hola ${capitalizeString(reqParamName)}!</h1>`);
});

app.listen(3000, () => console.log("Listening on port: 3000"));