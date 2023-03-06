import express from 'express';
import Livros from './livrosRoutes.js';
import Autores from "./autoresRoutes.js"

const routes = (app) =>{
app.route('/').get((req,res) =>{
    res.status(200).send({titulo:'Aula de Node.js'})
})


app.use(
    express.json(),
    Livros,
    Autores
)
}

export default routes

