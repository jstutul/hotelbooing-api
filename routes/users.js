import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controller/user.js";
const router = express.Router();

//GET ALL
router.get("/", getUsers);
//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", getUser);

export default router;
