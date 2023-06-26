const express = require('express');


const app = express();
const port = 3000;


// Serve static files from the client directory
app.use(express.static('build'));


app.listen(port, () => {
  console.log(`Tech Lab app listening at https://thetechlab.ca:${port}`);
});
