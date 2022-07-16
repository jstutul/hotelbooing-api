import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are login");
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you are login and you can delete your account");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are login and you can delete all account");
});
//GET ALL
router.get("/",verifyAdmin, getUsers);
//UPDATE
router.put("/:id",verifyUser, updateUser);
//DELETE
router.delete("/:id",verifyUser, deleteUser);
//GET
router.get("/:id",verifyUser, getUser);

export default router;
