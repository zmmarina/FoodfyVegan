const express = require ("express");
const routes = express.Router();

routes.get("/", (req, res) => {
    return res.render("index");
});

routes.get("/about", (req, res) => {
    return res.render("about");
});

routes.get("/recipes", (req, res) =>{
    return res.render("recipes");
});


module.exports = routes;