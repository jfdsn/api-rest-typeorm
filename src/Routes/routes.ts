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

routes.get('/pokemon/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const pokeList = await pokeService.getPokemonById(id);
        res.json(pokeList);
    } catch (error) {
        next(error);
    }
});

routes.post('/pokemon', async (req: Request, res: Response, next: NextFunction) =>{
    try {
        await pokeService.postPokemon(req.body);
        res.sendStatus(201);
    } catch (error) {
        next(error);
    }
});

routes.put('/pokemon/:id', async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const id = parseInt(req.params.id);
        await pokeService.putPokemonById(id, req.body);
        res.end();
    } catch (error) {
        next(error);
    }
});

routes.delete('/pokemon/:id', async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const id = parseInt(req.params.id);
        await pokeService.deletePokemonById(id);
        res.end();
    } catch (error) {
        next(error);
    }
});


export default routes;