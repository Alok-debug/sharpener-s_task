const express = require('express');

const controller = require('../controllers/expense');

const router=express.Router();



router.get('/getExpenses', controller.getExpenses);

router.post('/addExpense', controller.addExpense);

router.delete('/deleteExpense/:id', controller.deleteExpense);

router.get('/getExpense/:id', controller.getExpense);

router.put('/updateExpense/:id', controller.updateExpense);

module.exports=router;