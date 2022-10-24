import { Request, Response, NextFunction, Router} from 'express'
const routes = Router();
const pokeService = require('../Service/pokeService')



routes.get('/pokemon', async (req : Request, res : Response, next : NextFunction) => {
    try {
        const pokeList = await pokeService.getPokemon();
        res.json(pokeList);
    } catch (error) {
        next(error);
    }
});


export default routes;