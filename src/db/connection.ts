import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.NAME || 'almacen', process.env.USER || 'root', process.env.DB_PASSWORD || 'admin12345', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;