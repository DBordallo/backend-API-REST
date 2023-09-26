import express from "express";
import { updateBrand, createBrand, getAllBrands } from "../controllers/brandController.js";

const router = express.Router();

router.get('/', getAllBrands);
router.post('/', createBrand);
router.put('/:id', updateBrand);

export default router