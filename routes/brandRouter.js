import express from "express";
import {getProductsByBrand, getBrandByUnit, deleteBrand, updateBrand, createBrand, getAllBrands } from "../controllers/brandController.js";

const router = express.Router();

router.get('/', getAllBrands);
router.get('/:id', getBrandByUnit);
router.get('/:id/brandproducts', getProductsByBrand);
router.post('/', createBrand);
router.put('/:id', updateBrand);
router.delete('/:id', deleteBrand);

export default router