import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  console.log(newHotel);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(400).json("Error");
  }
});
//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (err) {
    res.status(400).json("Error");
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    res.status(400).json("Error");
  }
});
//GET
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(400).json("Error");
  }
});
//GET ALL

router.get("/", async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
});
export default router;
