import livros from "../../../models/Livros/RoutesHistoria/RoutesLivroHistoria4.js";


class LivroController {

 static listarLivros = (req, res) => {
    livros.find()
    .exec((err, livros) => {
    res.status(200).json(livros)
  })
 }

 static listarLivrosPorId = (req, res) => {
     const id = req.params.id;

     livros.findById(id)
      .exec((err, livros) =>{
      if(err){
        res.status(400).send({message: `${err.message} - Id do livro-Historia não localizado.`})
      } else {
        res.status(200).send(livros);
      }
     })

 }

 static cadastroLivro = async (req, res) =>{
    
    try {
      const picture = new livros(req.body);

      await picture.save();

      res.status(201).send(picture.toJSON())
      
    } catch (error) {
      res.status(500).send({message:`${error} - Falha ao cadastra um livro-Historia`})
      console.log(error)
    }
 }

 static atualizarLivro = (req, res) =>{
  const  id = req.params.id;

  livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
    if(!err){
      res.status(200).send({message:'Livro-Historia Atualizado com sucesso'});
    } else{
      res.status(500).send({message:err.message})
    }
  })
 }

 static excluirLivro = (req, res) =>{
  const id = req.params.id

  livros.findByIdAndDelete(id, (err) =>{
    if(!err){
      res.status(200).send({message: 'Livro-Historia Removido com sucesso'})
    }else{
      res.status(500).send({message: err.message})
    }
  })
 }

}

export default LivroController;