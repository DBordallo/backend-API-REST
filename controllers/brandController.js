import BrandModel from "../models/brandModel.js";

//Aquí voy a escribir todas las funciones que van a ser el CRUD de mi aplicación

//Voy a hacer el Read de mi CRUD con el metodo GET

export const getAllBrands = async (req, res) => {
    try{
        const brand = await BrandModel.findAll()
        res.json(brand)
    }catch(error){
        res.status(500).json({message: error.message})
        
    }
}

// Voy a hacer el Create de mi CRUD con el metodo POST

export const createBrand = async(req, res) => {
    try{
        await BrandModel.create(req.body)
        res.json({message: "The brand has been created successfully!"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}