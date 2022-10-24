import { AppDataSource } from "../data-source"
import { Pokemon } from "../entity/Pokemon";


exports.getPokemon = () => {
    return AppDataSource.manager.find(Pokemon);
};
