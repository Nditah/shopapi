import express from "express";
import * as products from "./../controllers/productController";

const productRoute = express.Router();

// Create a new Note
productRoute.post("/products", products.create);

// Retrieve all Notes
productRoute.get("/products", products.findAll);

// Retrieve a single Note with productId
productRoute.get("/products/:productId", products.findOne);

// Update a Note with productId
productRoute.put("/products/:productId", products.update);

// Delete a Note with productId
productRoute.delete("/products/:productId", products.delete);

export default productRoute;
