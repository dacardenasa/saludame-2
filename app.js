const express = require("express");
const app = express();

app.get("/makers/:name", (req, res) => {
  let reqParamName = req.params.name;
  if (!reqParamName) reqParamName = 'Desconocido!';
  reqParamName = reqParamName.replace(/^\w/, c => c.toUpperCase());
  res.send(`<h1>Hola ${reqParamName}!</h1>`);
});

app.listen(3000, () => console.log("Listening on port: 3000"));