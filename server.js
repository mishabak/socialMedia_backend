require('dotenv/config')
const express = require('express')
const app = express()
const morgan = require('morgan')
const userRouter = require('./router/user')
const cors = require('cors')
const db = require('./config/connection/mongoConnect')

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

db.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("database connected")
    }
})
app.use('/',userRouter);

app.listen(3001,()=>{console.log('server connected')})
