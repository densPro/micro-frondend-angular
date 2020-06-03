**build app for production**

To run micro a build app in production got to each micro frontend an execute the command 

```
build:single-spa:child1
```

this will build an minified app in dist folder. Execute this command per each micro front end that you have in your project.

To serve each micro front end please install lite-server only for development purposes.

```
npm install lite-server
```

Create **bs-config.json** file on the root of your micro front end. This file will set up the port, base directory of the server and will enable the cors in our lite-server

```json
{
  "port": 4202,
  "files": ["./src/**/*.{html,htm,css,js}"],
  "server": { "baseDir": "./dist/child2" },
  "cors": true
}
```

Add this script on **package.json**. It will apply **bs-config.json**  set up each server runs

```json
    "lite-server": "lite-server -c bs-config.json"
```

Finally execute the script

```
npm run lite-server
```

On container is not necessary enable cors, so you can skip that step from the set up. But before execute lite-serve script please change in   container/dist/container/assets/import-map.json file for somehting like this:

```json
{
  "imports": {
    "child1": "http://localhost:4201/main-es2015.js",
    "child2": "http://localhost:4202/main-es2015.js"
  }
}
```

Building micro front end apps the main.js file was renamed as main-es2015.js.