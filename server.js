const express = require ("express");
const nunjucks = require ("nunjucks");

const routes = require ("./routes");

const app = express();

app.set("view engine", "njk");

nunjucks.configure("views", {
    express:app
});

app.use(routes);
app.use(express.static("public"));


app.listen(5000, function(){
    console.log ("server is running");
});

