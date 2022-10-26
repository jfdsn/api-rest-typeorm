import { AppDataSource } from "../data-source"
import { Pokemon } from "../entity/Pokemon";

const pokeRepository = AppDataSource.getRepository(Pokemon);

export const getPokemon = () => {
    return pokeRepository.find();
}

export const getPokemonById = (id : number) => {
    return pokeRepository.findOneBy({id : id});    
}

export const postPokemon = (newpokemon : any) => {
    const newEntity = new Pokemon();
    newEntity.nome = newpokemon.nome;
    newEntity.tipo = newpokemon.tipo;
    newEntity.img = newpokemon.img;
    
    return pokeRepository.save(newEntity); 
}

export const putPokemonById = async (id : number, newdata : any) => {
    const pokeToUpdate = await getPokemonById(id);
    pokeToUpdate.nome = newdata.nome;
    pokeToUpdate.tipo = newdata.tipo;
    pokeToUpdate.img = newdata.img;
 
    return pokeRepository.save(pokeToUpdate); 
}

export const deletePokemonById = async (id : number) => {
    const pokeToDelete = await getPokemonById(id);
    return pokeRepository.remove(pokeToDelete);
}