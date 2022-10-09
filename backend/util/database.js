const Sequelize =require('sequelize');

const sequelize =new Sequelize('expense','root','sp.191273', {
    dialect:"mysql",
    host:"localhost"
})

module.exports = sequelize;