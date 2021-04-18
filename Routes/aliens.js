const express = require("express")
const Router = express.Router();
const Aliens = require("../models/aliensModel")
// import all controllers
// import SessionController from './app/controllers/SessionController';


// Add routes
Router.get('/', async (req, res) => {
   try {
      const ShowAliens = await Aliens.find()
      if (ShowAliens.length === 0) {
         res.send("No Data Found")
      } else {
         res.json(ShowAliens);
      }
   } catch (err) {
      console.log("Error" + err);
   }
});
// routes.post('/', );
// routes.put('/', );
// routes.delete('/', );

module.exports = Router;
