import express from "express";
import { getProductByUnit, deleteProduct, updateProduct, createProduct, getAllProducts } from "../controllers/productController.js";

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductByUnit);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router