import ProductModel from "../models/productModel.js";

//------------CRUD-----------------

//------------GET--------------

export const getAllProducts = async (req, res) => {
    try{
        const product = await ProductModel.findAll()
        res.json(product)
    }catch(error){
        res.status(500).json({message: error.message})
        
    }
}

//------------GET by unit --------------

export const getProductByUnit = async (req, res) => {
    const { id } = req.params;
    try{
        const product = await ProductModel.findOne({
            where: { id: id }
        })
        if (product) { 
        res.json(product)
        }else{
            res.status(404).json({ message: 'Product not found' });
        }
    }catch(error){
        res.status(500).json({message: error.message})
        
    }
}

// -------------POST-----------------

export const createProduct = async(req, res) => {
    try{
        await ProductModel.create(req.body)
        res.json({message: "You have created a new product!"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//----------------PUT-----------------------


export const updateProduct = async (req, res) => {
    const { id } = req.params; 
    try {
        const updatedProduct = await ProductModel.findOne({
            where: { id: id }
        });
        if (updated) {
            const updatedProduct = await ProductModel.findOne({ where: { id: id } });
            res.json({ message: 'Product updated successfully', brand: updatedProduct });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// -------------DELETE-----------------

export const deleteProduct = async (req, res) => {
    const { id } = req.params; 
    try {
        const deleted = await ProductModel.destroy({
            where: { id: id }
        });
        if (deleted) {
            res.json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}