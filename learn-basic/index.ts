import express, { Request, Response, Express } from "express";
import multer from "multer";
import path from "path";
import 'dotenv/config'
import crypto from "crypto";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      const fileEx = file.originalname.split('.') 
      const hash = crypto.createHash('md5').update(fileEx[0]).digest('hex');
      const uniqueSuffix = hash + '.' + fileEx[1]
      cb(null,  uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })
const port = process.env.PORT || 3000;
const app: Express = express();
// static folder public
app.use(express.static('public'))

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

app.post('/upload-file', upload.single("uploaded_file"), (req: Request, res: Response, next) => {
    // req.body contains the text fields
    console.log(req.file, req.body)
    const filename =  req.file?.filename
    console.log('---------------------'+ filename)
    res.render( "getFile", {filename: filename} );
})

// start the express server
app.listen(port, ()=>{
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
