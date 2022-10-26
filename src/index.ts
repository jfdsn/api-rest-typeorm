import { AppDataSource } from "./data-source"
import { Pokemon } from "./entity/Pokemon"
import { Application } from "express";
import routes from "./Routes/routes"
import express = require("express");

AppDataSource.initialize().then(async () => {

    /*console.log("Inserting a new user into the database...")
    const pokemon = new Pokemon()
    pokemon.nome = 'Pikachu'
    pokemon.tipo = 'Elétrico'
    pokemon.img = 'teste/teste'
    await AppDataSource.manager.save(pokemon)

    console.log("Saved a new user with id: " + pokemon.id)

    console.log("Loading users from the database...")
    const pokes = await AppDataSource.manager.find(Pokemon)
    console.log("Loaded users: ", pokes)

    console.log("Here you can setup and run express / fastify / any other framework.")*/
    const app : Application = express();

    app.use(express.json());  
    app.use('/', routes);
    app.listen(3000, () : void => {console.log('App rodando na porta 3000.')});    

}).catch(error => console.log(error))
