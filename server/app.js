const express = require("express");
const cors = require('cors')
// Execute package
const app = express();
app.use(cors())

// Routes
app.get("/", function (req, res) {
  // console.log("this is running");
  // res.send("<h1></h1>");
});

app.get("/apple", function (req, res) {
  console.log('Something')
  res.send({
    orange: "chicken",
  })
})
// How do we start listening to the server
app.listen(3001)
