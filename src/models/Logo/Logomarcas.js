import mongoose from 'mongoose';


const livroSchemaLogo= new mongoose.Schema({
   
        id:{type: String },
        titulo: { type: String},
        autor: { type: String},
        pagina: { type: Number },
        descricaoMin: { type: String },
        descricao: { type: String },
        data:{ type: String},
        img:{ type: String},
        linkLivro:{ type: String},
        ano:{ type: String},

})


const livros = mongoose.model('Logo', livroSchemaLogo);

export default livros;