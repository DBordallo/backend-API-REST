import express from "express";
import { createBrand, getAllBrands } from "../controllers/brandController.js";

const router = express.Router();

router.get('/', getAllBrands);
router.post('/', createBrand);

export default router