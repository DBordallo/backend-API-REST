import db from '../database/db.js';
import {DataTypes} from 'sequelize';

const ProductModel = db.define("product", {
    product_name:{type:DataTypes.STRING},
    description:{type:DataTypes.TEXT},
    price: {type:DataTypes.INTEGER},
    stock: {type:DataTypes.INTEGER},
    brands_id: {type:DataTypes.INTEGER}
},{
    timestamps: false
})

export default ProductModel;