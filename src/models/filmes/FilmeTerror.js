import mongoose from 'mongoose';


const filmeSchemaFilmeTerror = new mongoose.Schema({
   
        id:{type: String },
        titulo: { type: String},
        diretor: { type: String},
        duracao: { type: String },
        genero: { type: String },
        descricaoMin: { type: String },
        descricao: { type: String },
        data:{ type: String},
        img:{ type: String},
        imgCapa:{ type: String},
        linkfilmes:{ type: String},
        ano:{ type: String},
        imgAutor1:{ type: String},
        nomeAutor1filme:{ type: String },
        nomeAutor1:{ type: String },
        imgAutor2:{ type: String},
        nomeAutor2filme:{ type: String },
        nomeAutor2:{ type: String },
        imgAutor3:{ type: String},
        nomeAutor3filme:{ type: String },
        nomeAutor3:{ type: String },
        imgAutor4:{ type: String},
        nomeAutor4filme:{ type: String },
        nomeAutor4:{ type: String },
        imgAutor5:{ type: String},
        nomeAutor5filme:{ type: String },
        nomeAutor5:{ type: String },


})


const filmes = mongoose.model('filmesTerror', filmeSchemaFilmeTerror);

export default filmes;