import express, { Request, Response, Express } from "express";
// import multer from "multer";
import path from "path";
import 'dotenv/config'

const port = process.env.PORT || 3000;
const app: Express = express();

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "src/views" ) );
app.set( "view engine", "ejs" );

// define a route handler
app.get('/', (req: Request, res: Response)=>{
    res.send('Hehe test nodemon in ts ne');
});

app.get('/upload-file', (req: Request, res: Response) => {
    res.render( "uploadFile" );
});

app.post('/upload-file', (req: Request, res: Response)=>{

});

// start the express server
app.listen(port, ()=>{
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
