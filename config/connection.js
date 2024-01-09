const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if(process.env.NODE_ENV === 'production'){
    sequelize = new Sequelize(process.env.DATABASE_URL,{
      dialect: 'mysql',
      logging: false, // Disable logging to console
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      
    });
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "mysql",
            port: 3306
        }
    );
    
}
module.exports = sequelize;