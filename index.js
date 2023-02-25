const express = require('express');
const bodyParser = require('body-parser');


function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.post('/test', (req, res) => {
	
  let {loops,fib} = req.body;
  
  loops = parseInt(loops);
  fib = parseInt(fib);
  
  let ans = 0;
  
  for (let i = 0; i < loops ; i++) {
     ans = fibonacci(fib);
  }
  
  res.send(toString(ans));
});


app.listen(80, () => {
  console.log('Server started on port 3000');
});

