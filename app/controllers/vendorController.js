
import Vendor from "./../models/vendor";

// Create and Save a new Vendor
exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    res.status(400).send({
      message: "Vendor content can not be empty",
    });
  }

  // Create a Vendor
  const vendor = new Vendor({
    title: req.body.title || "Untitled Vendor",
    content: req.body.content,
  });

  // Save Vendor in the database
  vendor.save()
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Vendor.",
      });
    });
};

// Retrieve and return all vendors from the database.
exports.findAll = (req, res) => {
  Vendor.find()
    .then((vendors) => {
      res.send(vendors);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving vendors.",
      });
    });
};

// Find a single vendor with a vendorId
exports.findOne = (req, res) => {
  Vendor.findById(req.params.vendorId)
    .then((vendor) => {
      if (!vendor) {
        res.status(404).send({
          message: `Vendor not found with id ${req.params.vendorId}`,
        });
      }
      res.send(vendor);
    }).catch((err) => {
      if (err.kind === "ObjectId") {
        res.status(404).send({
          message: `Vendor not found with id ${req.params.vendorId}`,
        });
      }
      res.status(500).send({
        message: `Error retrieving vendor with id ${req.params.vendorId}`,
      });
    });
};

// Update a vendor identified by the vendorId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.content) {
    res.status(400).send({
      message: "Vendor content can not be empty",
    });
  }

  // Find vendor and update it with the request body
  Vendor.findByIdAndUpdate(req.params.vendorId, {
    title: req.body.title || "Untitled Vendor",
    content: req.body.content,
  }, { new: true })
    .then((vendor) => {
      if (!vendor) {
        res.status(404).send({
          message: `Vendor not found with id ${req.params.vendorId}`,
        });
      }
      res.send(vendor);
    }).catch((err) => {
      if (err.kind === "ObjectId") {
        res.status(404).send({
          message: `Vendor not found with id ${req.params.vendorId}`,
        });
      }
      res.status(500).send({
        message: `Error updating vendor with id ${req.params.vendorId}`,
      });
    });
};

// Delete a vendor with the specified vendorId in the request
exports.delete = (req, res) => {
  Vendor.findByIdAndRemove(req.params.vendorId)
    .then((vendor) => {
      if (!vendor) {
        res.status(404).send({
          message: `Vendor not found with id ${req.params.vendorId}`,
        });
      }
      res.send({
        message: "Vendor deleted successfully!",
      });
    }).catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        res.status(404).send({
          message: `Vendor not found with id ${req.params.vendorId}`,
        });
      }
      res.status(500).send({
        message: `Could not delete vendor with id ${req.params.vendorId}`,
      });
    });
};
