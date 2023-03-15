const mongoose= require("mongoose")

const clientSchema={
    nombre:String,
    pass:String,
    email:String
}

const Client = mongoose.model("Client",clientSchema)

module.exports = Client