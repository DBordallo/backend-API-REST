import BrandModel from "../models/brandModel.js";
import ProductModel from "../models/productModel.js";

//------------CRUD-----------------

//------------GET--------------

export const getAllBrands = async (req, res) => {
    try{
        const brand = await BrandModel.findAll()
        res.json(brand)
    }catch(error){
        res.status(500).json({message: error.message})
        
    }
}


// -------------GET by Unit-----------------

export const getBrandByUnit = async (req, res) => {
    const { id } = req.params; 
    try {
        const brand = await BrandModel.findOne({
            where: { id: id }
        });
        if (brand) {
            res.json(brand);
        } else {
            res.status(404).json({ message: 'Brand not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// -------------POST-----------------

export const createBrand = async(req, res) => {
    try{
        await BrandModel.create(req.body)
        res.json({message: "You have created a new brand!"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//----------------PUT-----------------------


export const updateBrand = async (req, res) => {
    const { id } = req.params; 
    try {
        const [updated] = await BrandModel.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedBrand = await BrandModel.findOne({ where: { id: id } });
            res.json({ message: 'Brand updated successfully', brand: updatedBrand });
        } else {
            res.status(404).json({ message: 'Brand not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// -------------DELETE-----------------

export const deleteBrand = async (req, res) => {
    const { id } = req.params; 
    try {
        const deleted = await BrandModel.destroy({
            where: { id: id }
        });
        if (deleted) {
            res.json({ message: 'Brand deleted successfully' });
        } else {
            res.status(404).json({ message: 'Brand not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}