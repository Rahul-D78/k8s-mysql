require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize');

const database= process.env.MYSQL_DATABASE
const password= process.env.MYSQL_PASSWORD
const username= process.env.MYSQL_USER
const host= process.env.MYSQL_HOST

const db = new Sequelize(database, username, password,{
    dialect: 'mysql',
    host: host,
    pool: {
        min: 0,
        max: 5
    }
});

const User = db.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

db.sync({force: true})
.then(() => {
    console.log('database created');
}).catch((e) => {
    console.log(`error ${e} while creating the database`);
});

exports = module.exports = {User}
