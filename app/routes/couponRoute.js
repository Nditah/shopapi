
	import express from "express";
	import * as coupons from "./../controllers/couponController";

	const couponRoute = express.Router();

	// Create a new coupon
	couponRoute.post("/coupons", coupons.create);

	// Retrieve all Notes
	couponRoute.get("/coupons", coupons.findAll);

	// Retrieve a single coupon with couponId
	couponRoute.get("/coupons/:couponId", coupons.findOne);

	// Update a coupon with couponId
	couponRoute.put("/coupons/:couponId", coupons.update);

	// Delete a coupon with couponId
	couponRoute.delete("/coupons/:couponId", coupons.delete);

	export default couponRoute;
	