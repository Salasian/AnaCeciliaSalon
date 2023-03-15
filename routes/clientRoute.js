const express  = require('express')
const router = express.Router()
const Client =require("../models/clientModel")

router.route("/create").post((req,res)=>{
    const nombre= req.body.nombre
    const pass= req.body.pass
    const email= req.body.email
    const newClient = new Client({
        nombre,
        pass,
        email
    })

    newClient.save()
})

router.route("/clients").get((req,res)=>{
    Client.find()
        .then(foundClients => res.json(foundClients))
})

module.exports = router