const express = require("express");
const router = express.Router();

router.use("/create", function(request, response){
    response.send("Добавление товара");
});
router.use("/:id", function(request, response){
    response.send(`Товар ${request.params.id}`);
});
router.use("/", function(request, response){
    response.send("Список товаров");
});