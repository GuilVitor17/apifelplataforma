import express from 'express';

import FilmeAcao from './AcaoRoutes.js';

const routes = (app) =>{
app.route('/').get((req,res) =>{
    res.status(200).send({titulo:'Aula de Node.js'})
})


app.use(
    express.json(),
   
    FilmeAcao
)
}

export default routes

