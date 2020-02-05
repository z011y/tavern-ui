const express = require("express");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("server started");

// const io = require("socket.io")();
//
// io.on("connection", client => {
//   client.on("subscribeToTimer", interval => {
//     console.log("client is subscribing to timer with interval ", interval);
//   });
// });
//
// const port = 8000;
// io.listen(port);
// console.log("listening on port ", port);
