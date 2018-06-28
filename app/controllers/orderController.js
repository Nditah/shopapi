
		import Order from "./../models/order";

		// Create and Save a new Order
		exports.create = (req, res) => {
			// Validate request
			if (!req.body.content) {
				res.status(400).send({
					message: "Order content can not be empty",
				});
			}

			// Create a Order
			const order = new Order({
				title: req.body.title || "Untitled Order",
				content: req.body.content,
			});

			// Save Order in the database
			order.save()
			.then((data) => {
				res.send(data);
			}).catch((err) => {
				res.status(500).send({
					message: err.message || "Some error occurred while creating the Order.",
				});
			});
		};

		// Retrieve and return all orders from the database.
		exports.findAll = (req, res) => {
			Order.find()
			.then((orders) => {
				res.send(orders);
			}).catch((err) => {
				res.status(500).send({
					message: err.message || "Some error occurred while retrieving orders.",
				});
			});
		};

		// Find a single order with a orderId
		exports.findOne = (req, res) => {
			Order.findById(req.params.orderId)
			.then((order) => {
				if (!order) {
					res.status(404).send({
						message: `Order not found with id {req.params.orderId}`,
					});
				}
				res.send(order);
			}).catch((err) => {
				if (err.kind === "ObjectId") {
					res.status(404).send({
						message: `Order not found with id {req.params.orderId}`,
					});
				}
				res.status(500).send({
					message: `Error retrieving order with id {req.params.orderId}`,
				});
			});
		};

		// Update a order identified by the orderId in the request
		exports.update = (req, res) => {
			// Validate Request
			if (!req.body.content) {
				res.status(400).send({
					message: "Order content can not be empty",
				});
			}

			// Find order and update it with the request body
			Order.findByIdAndUpdate(req.params.orderId, {
				title: req.body.title || "Untitled Order",
				content: req.body.content,
			}, { new: true })
			.then((order) => {
				if (!order) {
					res.status(404).send({
						message: `Order not found with id {req.params.orderId}`,
					});
				}
				res.send(order);
			}).catch((err) => {
				if (err.kind === "ObjectId") {
					res.status(404).send({
						message: `Order not found with id {req.params.orderId}`,
					});
				}
				res.status(500).send({
					message: `Error updating order with id {req.params.orderId}`,
				});
			});
		};

		// Delete a order with the specified orderId in the request
		exports.delete = (req, res) => {
			Order.findByIdAndRemove(req.params.orderId)
			.then((order) => {
				if (!order) {
					res.status(404).send({
						message: `Order not found with id {req.params.orderId}`,
					});
				}
				res.send({ message: "Order deleted successfully!" });
			}).catch((err) => {
				if (err.kind === "ObjectId" || err.name === "NotFound") {
					res.status(404).send({
						message: `Order not found with id {req.params.orderId}`,
					});
				}
				res.status(500).send({
					message: `Could not delete order with id {req.params.orderId}`,
				});
			});
		};
	