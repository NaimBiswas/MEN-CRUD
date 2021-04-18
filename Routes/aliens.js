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
// Get One Aliens 
Router.get('/:id', async (req, res) => {
   try {
      const ShowAlien = await Aliens.findById(req.params.id)

      res.json(ShowAlien);

   } catch (err) {
      console.log("Error" + err);
   }
});


// Delete the One Alien
Router.delete('/:id', async (req, res) => {
   try {
      const ShowAlien = await Aliens.findByIdAndDelete(req.params.id)



   } catch (err) {
      console.log("Error" + err);
   }
});


Router.post('/', async (req, res) => {
   const createAlien = new Aliens(req.body);
   try {
      const StogareData = await createAlien.save();
      res.json(StogareData)
   } catch (error) {
      res.send(error)
   }

});

// UPdate A alien 
Router.patch('/:id', async (req, res) => {
   try {

      const FindTheAlien = await Aliens.findById(req.params.id)
      FindTheAlien.name = req.body.name
      FindTheAlien.sub = req.body.sub
      // @ts-ignore
      const al = await FindTheAlien.save();
      res.send(al)
   } catch (err) {

      res.send(err)
   }
});


module.exports = Router;
