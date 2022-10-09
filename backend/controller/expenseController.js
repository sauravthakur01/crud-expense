const Expense = require('../models/expenseModel');

exports.postExpense = async(req,res,next)=>{
    try {
        let {amount , desc:description , cat:category } = req.body
        
        if(!amount || !description || !category){
            throw new Error("please enter all fields")
        }

        let data = await Expense.create({
            amount ,
            description,
            category
        })
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error})
    }
}

exports.getAllExpenses = async(req,res,next)=>{
    try {
        const data = await Expense.findAll()
        res.status(201).json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
    }
}

exports.deleteExpense = async(req,res,next)=>{
    try {
        let expenseId = req.params.id ;
        if(!expenseId){
           return res.status(400).json({error:'id is missing'})
        }
        await Expense.destroy({where:{id:expenseId}})
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).json('error occured')
    }
}