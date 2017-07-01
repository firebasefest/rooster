const express = require('express');
const app = express();
app.set("view engine", "ejs");

// STATIC DIRS
app.use(express.static(__dirname + "/public"));

// REQUIRING Routes
var indexRoutes  = require("./routes/index");

// USING Routes
app.use("/", indexRoutes);

//LISTENING THE PORT
app.listen(process.env.PORT || 2000, function(){
  console.log("Rooster server listening on port %d in %s mode", this.address().port, app.settings.env);
});
