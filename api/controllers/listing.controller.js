const Listing = require("../models/listing.model.js");
const { errorHandler } = require("../utils/error.js");

exports.createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

exports.deleteListing = async (req, res, next) => {};

exports.updateListing = async (req, res, next) => {};

exports.getListing = async (req, res, next) => {};

exports.getListings = async (req, res, next) => {};
