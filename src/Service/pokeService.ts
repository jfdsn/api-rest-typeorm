import * as pokeData from '../Data/pokeData';

 export const getPokemon = () => {
    return pokeData.getPokemon();
 }

export const getPokemonById = (id : number) => {
   return pokeData.getPokemonById(id);
}

export const postPokemon = (newpoke : any) => {
   return pokeData.postPokemon(newpoke);
}

export const putPokemonById = (id : number, newdata: any) => {
   return pokeData.putPokemonById(id, newdata);
}

export const deletePokemonById = (id : number) => {
   return pokeData.deletePokemonById(id);
}  

