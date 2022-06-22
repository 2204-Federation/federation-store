const express = require('express');
const app = express();

app.set('view engine', 'ejs') //(name of the thing youre using, actual engine you're using)
//if you're using a view engine, must use word for word "view engine"

app.get('/', (req, res)=>{
    console.log('Here');
    res.render('index', {text :'world'})
    
})

const userRouter = require('./routes/users')
//import the data from users.js in routes folder

app.use('/users', userRouter);
//there are many uses for the .use function, but here it is used to linking a particular router to a path
//for example, now the user router, users.js are all linked to the /users path

app.listen(3000);