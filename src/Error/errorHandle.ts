import { NextFunction, Request, Response } from "express";


export default (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error.message == "Id incorreto ou inexistente."){
        console.log("Id incorreto ou inexistente.");
        res.sendStatus(404).end()
    } else if (error.message == "Pokemon já registrado."){
        console.log("Pokemon já registrado.");
        res.sendStatus(409).end();
    } else {
        console.log("Erro interno.");
        res.sendStatus(500).end();
    }
}

