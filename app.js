const express = require('express');
const morgan = require('morgan');

const app = express();
// This is middleware that requests pass through
// on their way to the final handler
app.use(morgan('dev')); 
//This is the final request handler
app.get('/', (req, res) => {
    res.send('My name is Monet Cooper!');
  });

  app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
  });

  app.get('/burgers', (req, res) => {
    res.send('We have juicy cheese burgers!');
  })

  app.get('/pizza/pepperoni',(req,res) => {
      res.send('Your pizza is on the way!')
  })

  app.get('/pizza/pineapple', (req,res) => {
      res.send("We don't serve that here. Never call again!")
  })

  app.get('/boyfriend/garry',(req,res) => {
      res.send('My boyfriend is a supportive dork! Love Him!')
  })

  app.get('/doggos/leela-fry', (req,res) => {
      res.send('My dogs are small but LOUD!')
  })

  app.get('/echo', (req, res) => {
    const responseText = `Here are some details of your request:
      Base URL: ${req.baseUrl}
      Host: ${req.hostname}
      Path: ${req.path}
      Cookie: ${req.cookies}
      IP: ${req.ip}
      OG URL: ${req.originalUrl}
      Params: ${req.params}
      Protocol: ${req.protocol}
      Query: ${req.query}
    `;
    res.send(responseText);
  });

  app.get('/queryViewer', (req, res) => {
    console.log(req.query);
    res.end(); //do not send any data back to the client
  });

  app.get('/greetings', (req, res) => {
    //1. get values from the request
    const name = req.query.name;
    const race = req.query.race;
  
    //2. validate the values
    if(!name) {
      //3. name was not provided
      return res.status(400).send('Please provide a name');
    }
  
    if(!race) {
      //3. race was not provided
      return res.status(400).send('Please provide a race');
    }
  
    //4. and 5. both name and race are valid so do the processing.
    const greeting = `Yo, Greetings ${name} the ${race}, welcome to our kingdom.`;
  
    //6. send the response 
    res.send(greeting);
  });

  app.get('/sum',(req,res) => {
      const{a,b} = req.query;

      if(!a){
          return res.status(400).send('Please provide a number for a')
      }

      if(!b){
        return res.status(400).send('Please provide a number for b')
      }

      const numA = parseFloat(a);
      const numB = parseFloat(b);

      //school solution had:
    //   if(Number.isNaN(numA)) {
    //     return res
    //           .status(400)
    //           .send('a must be a number');
    //   }
    
    //   if(Number.isNaN(numB)) {
    //     return res
    //           .status(400)
    //           .send('b must be a number');
    //   }

      const c = numA + numB;
      const theSum = `The sum of ${numA} and ${numB} is ${c}`
      
    res.send(theSum);
  })

