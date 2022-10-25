
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

exports.deletExpense=(req,res,next)=>{
    const id=req.params.id;
    ExpenseData.findByPk(id)
    .then((ExpData)=>{
        ExpData.destroy()
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.editUser = (req, res, next) => {
    const id=req.params.id;
    User.findByPk(id)
        .then((user) => {
            ///console.log('in edit user', `${user}`);
            console.log(user.dataValues);
    })
    .catch(err=>{
        console.log(err)
    })
    
}