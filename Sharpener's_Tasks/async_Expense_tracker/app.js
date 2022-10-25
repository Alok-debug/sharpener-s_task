
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const expenseRoutes = require('./routes/expense'); 
const sequelize = require('./utils/database');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(expenseRoutes);
app.use(axios);



const PORT = process.env.PORT || 5000;
sequelize.sync()
.then(app.listen(PORT,()=>{console.log(`server is runing at port no: ${PORT}`)}))
.catch(err=>{
    console.log(err)
})