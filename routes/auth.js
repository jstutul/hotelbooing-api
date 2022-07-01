import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is Auth Router Home Page");
});
export default router;
