const express = require('express'); //tells JS to require the 'Express' package
const cors = require('cors'); //tells JS to requrie the 'Cors' package
const app = express(); //creates a variable that is equal to the express variable / package

app.use(cors()); //handles HTTP requests with cors package
app.use(express.json()); //handles HTTP requests with express.json package

app.get('/api/users', function(req, res) { //defines a route handler for GET requests to a given URL. 
  let items = ['Bow', 'Dirt Bike', 'Gaming PC'] //creates and defines a variable called items
  res.status(200).send(items); //responds with a successful status (200) and sends the array back to the client
});

app.get('/weather/:temperature', function(req, res) {
  const {temperature} = req.params;
  const phrase = `<h3>It was ${temperature} today!</h3>`;
  res.status(200).send(items);
});

app.listen(4021, function() { console.log(`Server running on 4021`) }); //tells the server to listen to requests happening on port 4021