import { AppDataSource } from "../data-source"
import { Pokemon } from "../entity/Pokemon";


export const getPokemon = () => {
    return AppDataSource.manager.find(Pokemon);
};

export const getPokemonById = (id : number) => {
    return 
}

export const postPokemon = (newpokemon : any) => {
    return 
}

export const putPokemonById = (id : number, newdata : any) => {
    return 
}

export const deletePokemonById = (id : number) => {
    return 
}