const express = require("express");
const app = express();

app.get("/user/:name", (req, res) => {
  let reqParamName = req.params.name;
  if (!reqParamName || reqParamName.length === 0) reqParamName = 'Desconocido!';
  
  reqParamName = reqParamName.split('');
  reqParamName.every( (letter, index) => { 
    if (index !== 0) return false;

    if (letter.match(/[a-z]/)) {
      reqParamName[index] = letter.toUpperCase();
    }
  });

  res.send(`<h1>Hola ${reqParamName.join('')}</h1>`);
});

app.listen(3000, () => console.log("Listening on port: 3000"));