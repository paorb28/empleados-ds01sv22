const express =require('express')
const app= express()
const empleadoRuta =express.Router()

//declaramos un objeto modelo

let empleado = require('../models/Empleado')
const Empleado = require('../models/Empleado')

//agregar un nuevo empleado

empleadoRuta.route('/create').post((req,res) => {
    Empleado.create(req.body)
    .then((data)=>{
       console.log('Se insertó el documento')
       res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})


//obtener todos los empleados de la colección 

empleadoRuta.route('/empleados').get((req,res)=> {
    Empleado.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//obtener un solo empleado por su id
empleadoRuta.route('/empleado/id').get((req,res)=>{
   Empleado.findById(req.params.id)
   .then((data)=>{
    res.send(data)
   })
   .catch((err)=>{
    console.error(err)
   })
})

//actualizar empleado 

empleadoRuta.route('/empleado/:id').put((req, res) => {
    Empleado.findByIdAndUpdate(req.params.id,{
        $set:req.body
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})


//eliminar empleado

empleadoRuta.route('delete/:id').delete((req,res)=>{
    Empleado.findByIdAndRemove(req.params.id)
    .then((data)=>{
        console.log('Se elimino el documento')
        res.send(data)
    })
    .catch((err)=> {
        console.error(err)
    })
})

module.exports =empleadoRuta;