import express from "express"
import morgan from "morgan";
import {json, urlencoded} from "body-parser";
const router = express.Router();
const app = express();


app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({extended:true}))
app.use('/api/v1', router);


const customLogger = (req,res,next) =>{
    console.log("Logger Incoming");
    console.log(req.body)
    next();
}

app.get('/', (req,res)=>{ 
    res.send({message:'OK GET'})
})

export const start = () =>{
    app.listen(3000, ()=>{
        console.log("server running at port 3000")
    });
    
}

app.post('/', [customLogger, customLogger], (req,res)=>{ // customLogger is a middleware, which runs before funtion
    console.log(req.body);
    res.send({message:'OK POST'})
})

// router.get('/post', (req,res) =>{
//     res.send({message:"Router OK GET"})
// })

// router.post('/post', (req,res) =>{
//     res.send({message:"Router OK POST"})
// })


router
    .route('/post')
    .get((req,res) =>{
        res.send({message:"Router OK GET"})
    })
    .post((req,res) =>{
        res.send({message:"Router OK POST"})
    })
    
router
    .route('/post/:id/:num')
    .get((req,res) =>{
        res.send({message:"Router OK GET"})
    })
    .put((req,res) =>{
        console.log(req.params)
        res.send({message:"Router OK PUT"})
    })
    .patch((req,res) =>{
        res.send({message:"Router OK PATCH"})
    })
    .delete((req,res) =>{
        res.send({message:"Router OK DELETE"})
    });

 