import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is User Router Home Page");
});
export default router;
