import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send("Hello, this is your Home Page.");
});

app.post('/calculate', function (req, res) {
    console.log('Received data -', req.body);
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const operation = req.body.operation;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Invalid operation';
    }

    res.send(`Form Submitted. Result is ${result}`);
});

app.listen(3002, function () {
    console.log("Server is running on port 3002");
});