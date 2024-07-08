import express from 'express'

const app = express();

app.use(express.urlencoded({ extended:true }))

app.get('/', function(req, res){
    res.send("Hello this is your Home Page.")
})

app.post('/sum', function(req, res){
    console.log('get data -',req.body);
    const numb1 = Number(req.body.num1)
    const numb2 = Number(req.body.num2)
    const sum = numb1 + numb2;
    res.send(`Form Submited. Sum is ${sum}`)
})

app.listen(3001, function(){
    console.log("Server is is runnig port 3001");
})