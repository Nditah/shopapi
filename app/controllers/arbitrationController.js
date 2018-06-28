
		import Arbitration from "./../models/arbitration";

		// Create and Save a new Arbitration
		exports.create = (req, res) => {
			// Validate request
			if (!req.body.content) {
				res.status(400).send({
					message: "Arbitration content can not be empty",
				});
			}

			// Create a Arbitration
			const arbitration = new Arbitration({
				title: req.body.title || "Untitled Arbitration",
				content: req.body.content,
			});

			// Save Arbitration in the database
			arbitration.save()
			.then((data) => {
				res.send(data);
			}).catch((err) => {
				res.status(500).send({
					message: err.message || "Some error occurred while creating the Arbitration.",
				});
			});
		};

		// Retrieve and return all arbitrations from the database.
		exports.findAll = (req, res) => {
			Arbitration.find()
			.then((arbitrations) => {
				res.send(arbitrations);
			}).catch((err) => {
				res.status(500).send({
					message: err.message || "Some error occurred while retrieving arbitrations.",
				});
			});
		};

		// Find a single arbitration with a arbitrationId
		exports.findOne = (req, res) => {
			Arbitration.findById(req.params.arbitrationId)
			.then((arbitration) => {
				if (!arbitration) {
					res.status(404).send({
						message: `Arbitration not found with id {req.params.arbitrationId}`,
					});
				}
				res.send(arbitration);
			}).catch((err) => {
				if (err.kind === "ObjectId") {
					res.status(404).send({
						message: `Arbitration not found with id {req.params.arbitrationId}`,
					});
				}
				res.status(500).send({
					message: `Error retrieving arbitration with id {req.params.arbitrationId}`,
				});
			});
		};

		// Update a arbitration identified by the arbitrationId in the request
		exports.update = (req, res) => {
			// Validate Request
			if (!req.body.content) {
				res.status(400).send({
					message: "Arbitration content can not be empty",
				});
			}

			// Find arbitration and update it with the request body
			Arbitration.findByIdAndUpdate(req.params.arbitrationId, {
				title: req.body.title || "Untitled Arbitration",
				content: req.body.content,
			}, { new: true })
			.then((arbitration) => {
				if (!arbitration) {
					res.status(404).send({
						message: `Arbitration not found with id {req.params.arbitrationId}`,
					});
				}
				res.send(arbitration);
			}).catch((err) => {
				if (err.kind === "ObjectId") {
					res.status(404).send({
						message: `Arbitration not found with id {req.params.arbitrationId}`,
					});
				}
				res.status(500).send({
					message: `Error updating arbitration with id {req.params.arbitrationId}`,
				});
			});
		};

		// Delete a arbitration with the specified arbitrationId in the request
		exports.delete = (req, res) => {
			Arbitration.findByIdAndRemove(req.params.arbitrationId)
			.then((arbitration) => {
				if (!arbitration) {
					res.status(404).send({
						message: `Arbitration not found with id {req.params.arbitrationId}`,
					});
				}
				res.send({ message: "Arbitration deleted successfully!" });
			}).catch((err) => {
				if (err.kind === "ObjectId" || err.name === "NotFound") {
					res.status(404).send({
						message: `Arbitration not found with id {req.params.arbitrationId}`,
					});
				}
				res.status(500).send({
					message: `Could not delete arbitration with id {req.params.arbitrationId}`,
				});
			});
		};
	