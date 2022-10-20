import "reflect-metadata"
import { DataSource } from "typeorm"
import { Pokemon } from "./entity/Pokemon"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
    database: "pokedex-typeorm",
    synchronize: true,
    logging: false,
    entities: [Pokemon],
    migrations: [],
    subscribers: [],
})
