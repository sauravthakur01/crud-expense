const express = require('express');
const router =express.Router();
const expenseContoller = require('../controller/expenseController');

router.get('/get-expenses', expenseContoller.getAllExpenses);

router.post('/add-expense', expenseContoller.postExpense );

router.delete('/delete-expense/:id' , expenseContoller.deleteExpense);

module.exports = router ;