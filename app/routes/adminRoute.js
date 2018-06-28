
import express from "express";
import * as admins from "./../controllers/adminController";

const adminRoute = express.Router();

// Create a new admin
adminRoute.post("/admins", admins.create);

// Retrieve all Notes
adminRoute.get("/admins", admins.findAll);

// Retrieve a single admin with adminId
adminRoute.get("/admins/:adminId", admins.findOne);

// Update a admin with adminId
adminRoute.put("/admins/:adminId", admins.update);

// Delete a admin with adminId
adminRoute.delete("/admins/:adminId", admins.delete);

export default adminRoute;
