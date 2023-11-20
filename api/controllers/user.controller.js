const bcrypt = require('bcryptjs');
const User = require ("../models/user.model.js");
const { errorHandler } = require ("../utils/error.js");
const Listing = require ("../models/listing.model.js");

exports.test = (req, res) => {
  res.json({
    message: "Api route is working!",
  });
};

exports.updateUser = async (req, res, next) => {};

exports.deleteUser = async (req, res, next) => {};

exports.getUserListings = async (req, res, next) => {};

exports.getUser = async (req, res, next) => {};
