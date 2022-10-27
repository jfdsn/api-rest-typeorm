import * as pokeData from '../Data/pokeData';

 export const getPokemon = () => {
    return pokeData.getPokemon();
 }

export const getPokemonById = async (id : number) => {
   const pokeExist = await pokeData.getPokemonById(id);
   if(!pokeExist) throw new Error("Id incorreto ou inexistente.");
   return pokeExist;
}

export const postPokemon = async (newpoke : any) => {
   const pokeAlreadyExist = await pokeData.getPokemonByNome(newpoke.nome);
   if(pokeAlreadyExist) throw new Error("Pokemon já registrado.");
   return pokeData.postPokemon(newpoke);
}

export const putPokemonById = async (id : number, newdata: any) => {
   await getPokemonById(id);
   return pokeData.putPokemonById(id, newdata);
}

export const deletePokemonById = async (id : number) => {
   await getPokemonById(id);
   return pokeData.deletePokemonById(id);
}  

