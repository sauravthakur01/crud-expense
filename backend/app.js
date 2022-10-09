const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/database');

const app =express();

app.use(cors());
app.use(bodyParser.json({extended:false}));

const expenseRoute = require('./routes/userExpenses');

app.use('/user' , expenseRoute)

sequelize.sync()
.then(()=>{
    app.listen(3000 , ()=>{
        console.log('server is running')
    })
})
.catch()
