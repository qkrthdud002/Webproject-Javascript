// const express = require('express');
// const app = express();

// app.get('/', (req, res)=>{
//     res.send('Home with express');
// });

// app.get('/hello', (req, res)=>{
//     res.send('Hello with express');
// });

// module.exports=app;

const express = require('express');
// Routers
const indexRouter = require('./routes/index');
const helloRouter = require('./routes/hello');

const app = express();
app.use('/', indexRouter);
app.use('/hello', helloRouter);

module.exports=app;