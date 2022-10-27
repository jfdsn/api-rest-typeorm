import { AppDataSource } from "./data-source"
import { Application } from "express";
import routes from "./Routes/routes"
import express = require("express");
import errorHandle from "./Error/errorHandle";

const port = 3000;

AppDataSource.initialize().then(async () => {

    const app : Application = express();

    app.use(express.json());  
    app.use('/', routes);
    app.use(errorHandle);

    app.listen(port, () : void => {console.log('App rodando na porta 3000.')});    

}).catch(error => console.log(error))
