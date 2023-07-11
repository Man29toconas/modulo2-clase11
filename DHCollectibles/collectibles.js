/* Desafio 1*/

let importar = (marca) => {
    let juguetesHotToys = require("./datos/figuras1.json");
    let juguetesBandai = require("./datos/figuras2.json");
    let juguetesStarWars = require("./datos/figuras3.json");

    switch (marca){
        case juguetesHotToys[0].marca:
            return juguetesHotToys;
            break;
        
        case juguetesBandai[0].marca:
            return juguetesBandai;
            break;
        case juguetesStarWars[0].marca:
            return juguetesStarWars;
            break;
        default: return "marca no registrada"
            break;        
    }
};

module.exports = importar;
