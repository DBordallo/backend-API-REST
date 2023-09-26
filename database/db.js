import { Sequelize } from "sequelize";

const db = new Sequelize('products_app', 'root', '1@Bordi86', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default db