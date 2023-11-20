import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import Listing from "../models/listing.model.js";

export const test = (req, res) => {
  res.json({
    message: "Api route is working!",
  });
};

export const updateUser = async (req, res, next) => {};

export const deleteUser = async (req, res, next) => {};

export const getUserListings = async (req, res, next) => {};

export const getUser = async (req, res, next) => {};
