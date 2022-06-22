const express = require('express');
const router = express.Router();

/*NOTE: ALWAYS PUT YOUR STATIC ROUTES AT THE TOP AND DYNAMIC AT THE BOTTOM
FOR EXAMPLE, IF I PUT THE :ID ROUTE AT THE TOP AND THE /NEW AT THE BOTTOM
I can run users/new and it will run the :id function and not the static one we wanted.
*/

router.get('/', (req, res)=>{
    res.send('user default')
})

router.get('/new', (req, res)=>{
    res.send('user new')
})

router.post('/',(req, res)=>{
    res.send('Create User');
})

// router.get('/:id', (req, res)=>{ //:id is a dynamic parameter
//     req.params.id; //this id goes with the id after the colon.
//     res.send(`Get user with ID ${req.params.id}`)
// })
// //use the colon format if you do not know what your path is, or there is no specific path

router.route('/:id').get((req, res)=>{ //:id is a dynamic parameter
    req.params.id; //this id goes with the id after the colon.
    res.send(`Get user with ID ${req.params.id}`)
}).put((req, res)=>{ 
    req.params.id; 
    res.send(`Update user with ID ${req.params.id}`)
}).delete((req, res)=>{ 
    req.params.id; 
    res.send(`Delete user with ID ${req.params.id}`)
})
//.route allows you to chain on methods that use the same path. Here, the dynamic id path has 3 functions chained onto it.


router.param('id', (res, req, next, id)=>{//param runs code that matches the parameter, in this case 'id'
     //takes in 4 parameters, res, req, next and the actual value
    console.log(id)
    next() //need this next function or our page will infinitely load. since this is a middleware, it will run first
})
module.exports = router;