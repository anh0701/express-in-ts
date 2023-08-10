# set up project express js with typescript
- create new folder
- Initiate the package.json file
    ```sh
        npm init
    ```
- create file index.ts example:
    ```sh   
        // Import the express in typescript file
        import express from 'express';
        
        // Initialize the express engine
        const app: express.Application = express();
        
        // Take a port 3000 for running server.
        const port: number = 3000;
        
        // Handling '/' Request
        app.get('/', (_req, _res) => {
            _res.send("TypeScript With Express");
        });
        
        // Server setup
        app.listen(port, () => {
            console.log(`TypeScript with Express
                http://localhost:${port}/`);
        });
    ```
- Install the required modules
  - Add an express module
    ```sh
        npm install @types/express
    ```
  - Add typescript and ts-node 
    ```sh
        npm i typescript ts-node nodemon
    ```
- Make the following change in the package.json file to run typescript
    ```sh 
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "nodemon index.ts"
        }
    ``` 
- Start the server
    ```sh
        npm start
    ```
