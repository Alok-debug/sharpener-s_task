
const ExpenseData = require('../models/expense');

exports.getExpenses = (req, res, next) => {
    ExpenseData.findAll()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
}


exports.addExpense=(req,res,next)=>{
    const ExpenseCat = req.body.expenseCat;
    const ExpenseAmt = req.body.expenseAmt;
    const ExpenseDes = req.body.expenseDes;
    ExpenseData.create({
        ExpenseCat:ExpenseCat,
        ExpenseAmt: ExpenseAmt,
        ExpenseDes:ExpenseDes
    })
    .then((result)=>{
        res.json(result.dataValues)
    })
    .catch(err=>{console.log(err)})
}

exports.deleteExpense=(req,res,next)=>{
    const id=req.params.id;
    ExpenseData.findByPk(id)
        .then((ExpData) => {
            ExpData.destroy();
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getExpense = (req, res, next) => {
    const id=req.params.id;
    ExpenseData.findByPk(id)
        .then((data) => {
            res.json(data.dataValues);
    })
    .catch(err=>{
        console.log(err)
    })
    
}

exports.updateExpense = (req, res, next) => {
    const ExpID = req.params.id;
    console.log(ExpID);
    const ExpenseCat = req.body.expenseCat;
    const ExpenseAmt = req.body.expenseAmt;
    const ExpenseDes = req.body.expenseDes;
    ExpenseData.update(
    {
        ExpenseCat:ExpenseCat,
        ExpenseAmt: ExpenseAmt,
        ExpenseDes:ExpenseDes
    },
    {
        where:
        {
            id:ExpID
        }
    })
        .then((result) => {
            console.log(result.dataValues);
        res.json(result.dataValues)
    })
    .catch(err=>{console.log(err)})
}