// Desafio 2


let importar = require('./collectibles');

let hotToys = importar('Hot Toys');
let bandai = importar('Bandai');
let starsWars = importar('Star Wars');

let unifiedCollectibles = [...hotToys,...bandai,...starsWars];

let collectibles = {
    figuras: unifiedCollectibles,
        listFigures: function() {
            this.figuras.forEach((figura) => {
                console.log(figura)    
            })
        },
        figuresByBrand: function(marca) {
            return this.figuras.filter(figura => figura.marca == marca);
        }
};
