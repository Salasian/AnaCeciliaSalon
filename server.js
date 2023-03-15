const express =require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://iansalas216755:salon@anaceciliasalon.ypjyi4f.mongodb.net/anacecilia",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })

app.use("/",require("./routes/clientRoute"))

app.listen(3001,function(){
    console.log('Running on 3001');
})