import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req, res, next) => {
  const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
  req.user = decode;
  next();
  try {
  } catch (error) {
    console.log(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(200).send({
        ok: false,
        success: false,
        message: "UnAuthorized Access",
        role: user.role,
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
