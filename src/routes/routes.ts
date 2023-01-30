//external modules imports
import { Express,Request,Response } from "express";
import swaggerUi from "swagger-ui-express";

//internal modules imports
import leadRoutes from "../modules/lead/routes.js";
import swaggerDocument from "../swagger.js";

function routes(app:Express):void{
    app.get('/',(req:Request,res:Response):void=>{
        console.log(req.query)
        res.send("<H1>Welcome to Used Car Refinance 2.0</H1>")
    });

    app.get('/healthCheck',(req:Request,res:Response):void=>{
        console.log(req.query)
        res.send("Ok")
    });

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { swaggerOptions: { docExpansion: "none"}}));

    app.use("/lead",leadRoutes);
}

export default routes;