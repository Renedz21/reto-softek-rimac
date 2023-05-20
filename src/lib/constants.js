const _ = require('lodash');

function transformarModelo(modelo) {
    const traducciones = {
        name: 'nombre',
        height: 'peso',
        mass: 'masa',
        hair_color: 'color_cabello',
        skin_color: 'color_piel',
        eye_color: 'color_ojos',
        birth_year: 'año_nacimiento',
        gender: 'genero',
        homeworld: 'mundo_natal',
        films: 'películas',
        species: 'especies',
        vehicles: 'vehículos',
        starships: 'naves_estelares',
        created: 'creado',
        edited: 'editado',
        rotation_period: "periodo_rotacion",
        orbital_period: "periodo_orbital",
        diameter: "diametro",
        climate: "clima",
        gravity: "gravedad",
        terrain: "terreno",
        surface_water: "superficie_agua",
        population: "poblacion",
        residents: "residentes",
    };

    return _.mapKeys(modelo, (value, key) => traducciones[key] || key);
}

const url = 'https://swapi.dev/api/';

module.exports = {
    transformarModelo,
    url
}