import express from 'express';
import Livros from './livrosRoutes.js';
import Romance from './RomanceRoutes.js'
import Aventura from './AventuraRoutes.js'
import Historia from './HistoriaRoutes.js'
import Infantil from './InfantilRoutes.js'
import Literatura from './LiteraturaRoutes.js'
import Religiao from './ReligiaoRoutes.js'

import FilmeAcao from '../FilmesRoutes/AcaoRoutes.js';
import FilmeTerror from '../FilmesRoutes/TerrorRoutes.js'
import FilmeComedia from '../FilmesRoutes/ComediaRoutes.js'
import FilmeDesenho from '../FilmesRoutes/DesenhoRoutes.js'
import FilmeRomance from '../FilmesRoutes/RomanceRoutes.js'
import FilmeDrama from '../FilmesRoutes/DramaRoutes.js'
import FilmesDestaques from '../FilmesRoutes/FilmesRoutes.js'

import RotaAventura1 from '../LivrosRoutes/RotasAventura/AventuraRota1.js'
import RotaAventura2 from '../LivrosRoutes/RotasAventura/AventuraRota2.js'
import RotaAventura3 from '../LivrosRoutes/RotasAventura/AventuraRota3.js'
import RotaAventura4 from '../LivrosRoutes/RotasAventura/AventuraRota4.js'
import RotaAventura5 from '../LivrosRoutes/RotasAventura/AventuraRota5.js'

import RotaHistoria1 from '../LivrosRoutes/RotasHistoria/HistoriaRota1.js'
import RotaHistoria2 from '../LivrosRoutes/RotasHistoria/HistoriaRota2.js'
import RotaHistoria3 from '../LivrosRoutes/RotasHistoria/HistoriaRota3.js'
import RotaHistoria4 from '../LivrosRoutes/RotasHistoria/HistoriaRota4.js'
import RotaHistoria5 from '../LivrosRoutes/RotasHistoria/HistoriaRota5.js'


import RotaLiteratura1 from '../LivrosRoutes/RotasLiteratura/LiteraturaRota1.js'
import RotaLiteratura2 from '../LivrosRoutes/RotasLiteratura/LiteraturaRota2.js'
import RotaLiteratura3 from '../LivrosRoutes/RotasLiteratura/LiteraturaRota3.js'
import RotaLiteratura4 from '../LivrosRoutes/RotasLiteratura/LiteraturaRota4.js'
import RotaLiteratura5 from '../LivrosRoutes/RotasLiteratura/LiteraturaRota5.js'


import RotaReligiao1 from '../LivrosRoutes/RotasReligiao/ReligiaoRota1.js'
import RotaReligiao2 from '../LivrosRoutes/RotasReligiao/ReligiaoRota2.js'
import RotaReligiao3 from '../LivrosRoutes/RotasReligiao/ReligiaoRota3.js'
import RotaReligiao4 from '../LivrosRoutes/RotasReligiao/ReligiaoRota4.js'
import RotaReligiao5 from '../LivrosRoutes/RotasReligiao/ReligiaoRota5.js'


import RotaRomance1 from '../LivrosRoutes/RotasRomance/RomanceRota1.js'
import RotaRomance2 from '../LivrosRoutes/RotasRomance/RomanceRota2.js'
import RotaRomance3 from '../LivrosRoutes/RotasRomance/RomanceRota3.js'
import RotaRomance4 from '../LivrosRoutes/RotasRomance/RomanceRota4.js'
import RotaRomance5 from '../LivrosRoutes/RotasRomance/RomanceRota5.js'


import RotaInfantil1 from '../LivrosRoutes/RotasInfantil/InfantilRota1.js'
import RotaInfantil2 from '../LivrosRoutes/RotasInfantil/InfantilRota2.js'
import RotaInfantil3 from '../LivrosRoutes/RotasInfantil/InfantilRota3.js'
import RotaInfantil4 from '../LivrosRoutes/RotasInfantil/InfantilRota4.js'
import RotaInfantil5 from '../LivrosRoutes/RotasInfantil/InfantilRota5.js'



// rotas Filmes
import RotaAcao1 from '../FilmesRoutes/RotaAcao/AcaoRoutes1.js'
import RotaAcao2 from '../FilmesRoutes/RotaAcao/AcaoRoutes2.js'
import RotaAcao3 from '../FilmesRoutes/RotaAcao/AcaoRoutes3.js'
import RotaAcao4 from '../FilmesRoutes/RotaAcao/AcaoRoutes4.js'
import RotaAcao5 from '../FilmesRoutes/RotaAcao/AcaoRoutes5.js'


import RotaComedia1 from '../FilmesRoutes/RotaComedia/ComediaRoutes1.js'
import RotaComedia2 from '../FilmesRoutes/RotaComedia/ComediaRoutes2.js'
import RotaComedia3 from '../FilmesRoutes/RotaComedia/ComediaRoutes3.js'
import RotaComedia4 from '../FilmesRoutes/RotaComedia/ComediaRoutes4.js'
import RotaComedia5 from '../FilmesRoutes/RotaComedia/ComediaRoutes5.js'


import RotaTerror1 from '../FilmesRoutes/RotaTerror/TerrorRoutes1.js'
import RotaTerror2 from '../FilmesRoutes/RotaTerror/TerrorRoutes2.js'
import RotaTerror3 from '../FilmesRoutes/RotaTerror/TerrorRoutes3.js'
import RotaTerror4 from '../FilmesRoutes/RotaTerror/TerrorRoutes4.js'
import RotaTerror5 from '../FilmesRoutes/RotaTerror/TerrorRoutes5.js'

import RotaRomancefilme1 from '../FilmesRoutes/RotaRomance/RomanceRoutes1.js'
import RotaRomancefilme2 from '../FilmesRoutes/RotaRomance/RomanceRoutes2.js'
import RotaRomancefilme3 from '../FilmesRoutes/RotaRomance/RomanceRoutes3.js'
import RotaRomancefilme4 from '../FilmesRoutes/RotaRomance/RomanceRoutes4.js'
import RotaRomancefilme5 from '../FilmesRoutes/RotaRomance/RomanceRoutes5.js'


import RotaDrama1 from '../FilmesRoutes/RotaDrama/DramaRoutes1.js'
import RotaDrama2 from '../FilmesRoutes/RotaDrama/DramaRoutes2.js'
import RotaDrama3 from '../FilmesRoutes/RotaDrama/DramaRoutes3.js'
import RotaDrama4 from '../FilmesRoutes/RotaDrama/DramaRoutes4.js'
import RotaDrama5 from '../FilmesRoutes/RotaDrama/DramaRoutes5.js'

import RotaDesenhofilme1 from '../FilmesRoutes/RotaDesenho/DesenhoRoutes1.js'
import RotaDesenhofilme2 from '../FilmesRoutes/RotaDesenho/DesenhoRoutes2.js'
import RotaDesenhofilme3 from '../FilmesRoutes/RotaDesenho/DesenhoRoutes3.js'
import RotaDesenhofilme4 from '../FilmesRoutes/RotaDesenho/DesenhoRoutes4.js'
import RotaDesenhofilme5 from '../FilmesRoutes/RotaDesenho/DesenhoRoutes5.js'



// rota de logmarcas
import LogoMarcas from '../LogoRoutes/LogoRoutes.js'
import LogoMarcasCarrossel from '../LogoRoutes/LogoRoutesCarrossel.js'


const routes = (app) =>{
app.route('/').get((req,res) =>{
    res.status(200).send({titulo:'Aula de Node.js'})
})


app.use(
    express.json(),
    // rota destaque livros
    Livros,
    Romance,
    Aventura,
    Historia,
    Infantil,
    Literatura,
    Religiao,

    // rota desatque filme
    FilmeAcao,
    FilmeTerror,
    FilmeComedia,
    FilmeDesenho,
    FilmeDrama,
    FilmeRomance,
    FilmesDestaques,

    // rota livro aventura
    RotaAventura1,
    RotaAventura2,
    RotaAventura3,
    RotaAventura4,
    RotaAventura5,

    // rota livro historia
    RotaHistoria1,
    RotaHistoria2,
    RotaHistoria3,
    RotaHistoria4,
    RotaHistoria5,
    

    // rota livro religiao
    RotaReligiao1,
    RotaReligiao2,
    RotaReligiao3,
    RotaReligiao4,
    RotaReligiao5,
    
    // rota livro infantil
    RotaInfantil1,
    RotaInfantil2,
    RotaInfantil3,
    RotaInfantil4,
    RotaInfantil5,

    // rota livro romance
    RotaRomance1,
    RotaRomance2,
    RotaRomance3,
    RotaRomance4,
    RotaRomance5,

    // rota livro romance
    RotaLiteratura1,
    RotaLiteratura2,
    RotaLiteratura3,
    RotaLiteratura4,
    RotaLiteratura5,


    // rota filmes Acao
    RotaAcao1,
    RotaAcao2,
    RotaAcao3,
    RotaAcao4,
    RotaAcao5,

    // rota filme romance
    RotaRomancefilme1,
    RotaRomancefilme2,
    RotaRomancefilme3,
    RotaRomancefilme4,
    RotaRomancefilme5,

    // rota filme desenho 
    RotaDesenhofilme1,
    RotaDesenhofilme2,
    RotaDesenhofilme3,
    RotaDesenhofilme4,
    RotaDesenhofilme5,

    // rota filme comedia
    RotaComedia1,
    RotaComedia2,
    RotaComedia3,
    RotaComedia4,
    RotaComedia5,

    // rota filme drama
    RotaDrama1,
    RotaDrama2,
    RotaDrama3,
    RotaDrama4,
    RotaDrama5,

    // rota filme terror
    RotaTerror1,
    RotaTerror2,
    RotaTerror3,
    RotaTerror4,
    RotaTerror5,

    // rota Logo marcas
    LogoMarcas,
    LogoMarcasCarrossel
)
}

export default routes

