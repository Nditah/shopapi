
import express from "express";
import * as records from "./../controllers/recordController";

const recordRoute = express.Router();

// Create a new record
recordRoute.post("/records", records.create);

// Retrieve all Notes
recordRoute.get("/records", records.findAll);

// Retrieve a single record with recordId
recordRoute.get("/records/:recordId", records.findOne);

// Update a record with recordId
recordRoute.put("/records/:recordId", records.update);

// Delete a record with recordId
recordRoute.delete("/records/:recordId", records.delete);

export default recordRoute;
