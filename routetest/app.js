app.all( ) 

const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));

app.all('/', (req, res) => {
  res.send('This route handles all requests for fruits!');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

