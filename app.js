const mongoose = require('mongoose')
const { type } = require('os')
const url_bd = ""

mongoose.connect(url_bd)
.then(() => {
    console.log("Funciona")
})
.catch((error) => {
    console.log("No funciona")
})

const esquema = new mongoose.Schema({
    name: {
        type: String
    },
    apepat: {
        type: String
    },
    apemat: {
        type: String
    },
    numerote1: {
        type: Number
    }

})

const modelo = new mongoose.model('tabla de alumnos', esquema)
const modelop = new mongoose.model('tabla de maestros', esquema)

modelo.create({
    name:"Pau",
    apepat:"Quiroz",
    apemat:"Díaz de León",
    numerote1:220404
})