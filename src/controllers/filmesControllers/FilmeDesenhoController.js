import filmes from "../../models/filmes/FilmeDesenho.js";


class FilmesController {

 static listarfilmes = (req, res) => {
    filmes.find()
    .exec((err, filmes) => {
    res.status(200).json(filmes)
  })
 }

 static listarfilmesPorId = (req, res) => {
     const id = req.params.id;

     filmes.findById(id)
      .exec((err, filmes) =>{
      if(err){
        res.status(400).send({message: `${err.message} - Id do Filmes não localizado.`})
      } else {
        res.status(200).send(filmes);
      }
     })

 }

 static cadastroFilmes = async (req, res) =>{
    
    try {
      const picture = new filmes(req.body);

      await picture.save();

      res.status(201).send(picture.toJSON())
      
    } catch (error) {
      res.status(500).send({message:`${error} - Falha ao cadastra um Filmes`})
      console.log(error)
    }
 }

 static atualizarFilmes = (req, res) =>{
  const  id = req.params.id;

  filmes.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
    if(!err){
      res.status(200).send({message:'Filmes Atualizado com sucesso'});
    } else{
      res.status(500).send({message:err.message})
    }
  })
 }

 static excluirFilmes = (req, res) =>{
  const id = req.params.id

  filmes.findByIdAndDelete(id, (err) =>{
    if(!err){
      res.status(200).send({message: 'Filmes Removido com sucesso'})
    }else{
      res.status(500).send({message: err.message})
    }
  })
 }

}

export default FilmesController;