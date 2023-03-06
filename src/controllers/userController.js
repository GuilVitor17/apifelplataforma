import autor from "../models/user.js";

class AutorController {

 static listarautor = (req, res) => {
    autor.find((err, autor) => {
    res.status(200).json(autor)
  })
 }

 static listarautorPorId = (req, res) => {
     const id = req.params.id;

     autor.findById(id, (err, autor) =>{
      if(err){
        res.status(400).send({message: `${err.message} - Id do Autor não localizado.`})
      } else {
        res.status(200).send(autor);
      }
     })

 }

 static cadastroAutor = (req,res) =>{
  let Autor = new autor(req.body);

  Autor.save((err) =>{
    if(err){
      res.status(500).send({message:`${err} - Falha ao cadastra um Autor`})
    } else{
      res.status(201).send(Autor.toJSON())
    }
  })
 }

 static atualizarAutor = (req, res) =>{
  const  id = req.params.id;

  autor.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
    if(!err){
      res.status(200).send({message:'Autor Atualizado com sucesso'});
    } else{
      res.status(500).send({message:err.message})
    }
  })
 }

 static excluirAutor = (req, res) =>{
  const id = req.params.id

  autor.findByIdAndDelete(id, (err) =>{
    if(!err){
      res.status(200).send({message: 'Autor Removido com sucesso'})
    }else{
      res.status(500).send({message: err.message})
    }
  })
 }



}

export default AutorController;