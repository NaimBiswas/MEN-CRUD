const express = require('express')
const mongoose = require("mongoose")
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port port!`))






// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/Alien', {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
}, (err) => {
   if (!err) {
      console.log('MongoDB Connection Succeeded.')
   } else {
      console.log('Error in DB connection: ' + err)
   }
});

