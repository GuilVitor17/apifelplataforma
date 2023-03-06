import filmes from "../../models/filmes/FilmesCarrossel.js";


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
        res.status(400).send({message: `${err.message} - Id do Filme não localizado.`})
      } else {
        res.status(200).send(filmes);
      }
     })

 }

 static cadastroFilme = async (req, res) =>{
    
    try {
      const picture = new filmes(req.body);

      await picture.save();

      res.status(201).send(picture.toJSON())
      
    } catch (error) {
      res.status(500).send({message:`${error} - Falha ao cadastra um Filme`})
      console.log(error)
    }
 }

 static atualizarFilme = (req, res) =>{
  const  id = req.params.id;

  filmes.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
    if(!err){
      res.status(200).send({message:'Filme Atualizado com sucesso'});
    } else{
      res.status(500).send({message:err.message})
    }
  })
 }

 static excluirFilme = (req, res) =>{
  const id = req.params.id

  filmes.findByIdAndDelete(id, (err) =>{
    if(!err){
      res.status(200).send({message: 'Filme Removido com sucesso'})
    }else{
      res.status(500).send({message: err.message})
    }
  })
 }

}

export default FilmesController;