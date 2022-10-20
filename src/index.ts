import { AppDataSource } from "./data-source"
import { Pokemon } from "./entity/Pokemon"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const pokemon = new Pokemon()
    pokemon.nome = 'Pikachu'
    pokemon.tipo = 'Elétrico'
    pokemon.img = 'teste/teste'
    await AppDataSource.manager.save(pokemon)

    console.log("Saved a new user with id: " + pokemon.id)

    console.log("Loading users from the database...")
    const pokes = await AppDataSource.manager.find(Pokemon)
    console.log("Loaded users: ", pokes)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
