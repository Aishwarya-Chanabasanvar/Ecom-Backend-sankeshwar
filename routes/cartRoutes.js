const express = require("express");

const {
  getCart,
  addTocart,
  updateQuantity,
  removeProduct,
  clearCart,
} = require("../controllers/cartcontroller");
const { isAuth } = require("../middlewares/authmiddlewares");

const cartRoutes = express.Router();

cartRoutes.get("/", isAuth, getCart);

cartRoutes.post("/add", isAuth, addTocart);

cartRoutes.put("/", isAuth, updateQuantity);

cartRoutes.delete("/product", isAuth, removeProduct);

cartRoutes.delete("/", isAuth, clearCart);

module.exports = cartRoutes;
