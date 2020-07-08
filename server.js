const express = require ("express");
const routes = require ("./routes");
const nunjucks = require ("nunjucks");

const app = express();

app.set("view engine", "html");

nunjucks.configure("views", {
    express:app
});

app.use(routes);
app.use(express.static("public"));


app.listen(5000, function(){
    console.log ("server is running");
});

