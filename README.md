# RESTful API Exercise

This repo contains code for a RESTful API using ExpressJS and MongoDB technology.\
This repo is for learning and practice purpose only.\
DELETE THE PASSWORD WHEN USING MONGODB ATLAS URL.

## :smile: **Getting Started/Brief Description**

- run the code by `npm start`, turn on your browser and go to the designated port (default port is 3301)
  - greeted with a site called "This is a default page."
- go to posts branch (default is `http://localhost:10021/posts`) to see data in JSON
  - if you have POSTMAN, you can send GET, POST, DELETE and PUT req with JSON body to the above URL

## :computer: **Prerequisites/Built With/Technologies used**

- NodeJS
- Mongo DB using Mongo Atlas and moongose

## :page_facing_up: **Installing/Running**

- clone this repo to your local machine
- run `npm i` to installed required packages
- run `npm start` to run the application (check `package.json` for more details)

## :car: **Deployment**

**This was intentionally left blank.**

## :memo: **Notes**

TODO:

- finish this exercise
- compare this to webdev_project004
- merge them together then find out what is the best solutions for both of them

_Packages used_

- nodemon: for running back end server locally
- `express`: pre-written library for ez creating back end server
- `mongoose`: help connect app to Mongo db
- dotenv: install this to hide your password inside the URL (URL connect to MongoAtlas, ...)
- `body-parser`: parse our req, give us the correct data format to handle (JSON to JS)
  - because we cant process that req coming in our body as raw JSON, need a special package that converted to JSON for us

_Project structure_

- `models` dir: describe how a document should be stored (understand it like a schema in normal SQL DB)
- `config` dir: contains data, credentials and connection establishments to the DB
- `controller` dir: dictates what logic happens when comes to an API endpoints/routes, usually handles CRUD logic here
- `routes` dir: dictates what URI relates to what logic in controller
- `env` file: contains info about credentials to connect to Mongo DB (here use Mongo Atlas)
- `app.js`: entry point

## :bell: **Contributing**

**This was intentionally left blank.**

## :speech_balloon: **Authors**

Check credits

## :grey_exclamation: **License**

**This was intentionally left blank.**

## :email: **Credits/Acknowledgments/References**

This exercise was based on these tutorials:

- <https://www.zeolearn.com/magazine/designing-a-rest-api-with-nodejs-and-mongodb-atlas?fbclid=IwAR3gLOIETgUEEIxgr0Rfyvf-y_6jOpPhjDYbGKr6alrKdAUXEghCL_oCvdE>
- <https://www.thepolyglotdeveloper.com/2018/09/developing-restful-api-nodejs-mongodb-atlas/?fbclid=IwAR2HSIHLODg-q8hctp1lNbSwZuegEUAXosSamPbXWAPcEkwnwvH9pquDNDM>
- <https://www.joekarlsson.com/2019/04/a-gentle-introduction-to-setting-up-a-react-and-mongodb-stitch-app-from-scratch-in-10-minutes/?fbclid=IwAR1ofrnJ4OgqAp8gKi_V6BWKyKOfodS34929rzbv9-HU-RKkmITMYqe5uhI>
- <https://jamesroyston.dev/2019/07/24/How%20to%20deploy%20your%20express-mongoDB%20API%20+%20Reach%20frontend%20to%20Heroku/?fbclid=IwAR0GzlXUj8_9ePEC3NA1qLBWd19A0clRzEPbL15iNjkpW4bc1CRg6kmhOeU>
