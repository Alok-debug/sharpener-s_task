const Sequelize=require('sequelize')
const sequelize=require('../utils/database')

const ExpenseData=sequelize.define('expenseTable',{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true
    },
    ExpenseCat:{
        type:Sequelize.STRING,
        allowNull:false
    },
    ExpenseAmt:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    ExpenseDes: {
        type:Sequelize.STRING,
        allowNull:false    
    }
});

module.exports=ExpenseData;