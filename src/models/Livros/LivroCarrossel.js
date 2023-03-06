import mongoose from 'mongoose';


const livroSchemaCarrossel = new mongoose.Schema({
   
        id:{type: String },
        titulo: { type: String},
        autor: { type: String},
        pagina: { type: Number },
        descricaoMin: { type: String },
        descricao: { type: String },
        data:{ type: String},
        img:{ type: String},
        imgCapa:{ type: String},
        linkLivro:{ type: String},
        ano:{ type: String},
        genero:{ type: String}

})


const livros = mongoose.model('livrosDestaques', livroSchemaCarrossel);

export default livros;