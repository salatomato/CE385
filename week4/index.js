// const eccpress = require('express');
// const app = express();
// const port = 3000;

// app.get('/', ( req, res) => {
//     res.send('Hello, World!'); 
// });

// app.listen(port, () => {
//     console.log(`sever is running on http://localhost:${port}`);
// });

 const operation = require('./work1');
 console.log(operation("add" , 4, 5));
 console.log(operation("subtract" , 10, 3));
 console.log(operation("multiply" , 5, 6));
 console.log(operation("divide" , 8, 2));