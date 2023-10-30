const express = require("express"); 
const app = express() ; 
const data = require("./data.js")
const cors = require("cors") ; 
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get("/", (req, res) => {
  res.status(200).json(data);
});


let port = 8000;
app.listen(port, () => {
  console.log(`Port is running at ${port}`);
});

