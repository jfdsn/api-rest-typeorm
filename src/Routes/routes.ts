import { Request, Response, NextFunction, Router} from 'express'
import * as pokeService from '../Service/pokeService';
const routes = Router();



routes.get('/pokemon', async (req : Request, res : Response, next : NextFunction) => {
    try {
        const pokeList = await pokeService.getPokemon();
        res.json(pokeList);
    } catch (error) {
        next(error);
    }
});


export default routes;