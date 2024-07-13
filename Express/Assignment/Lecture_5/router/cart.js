import express from 'express'
const router = express.Router()

let cartItem = [
    { id: 1, product_name: 'T-shirt', price: '₹ 20', quantity: '1 pcs' },
    { id: 2, product_name: 'Shoes', price: '₹ 30', quantity: '3 pcs' },
    { id: 3, product_name: 'Pen', price: '₹ 2', quantity: '13 pcs' },
    { id: 4, product_name: 'Pencil', price: '₹ 1', quantity: '8 pcs' },
    { id: 5, product_name: 'Notebook', price: '₹ 15', quantity: '5 pcs' },
    { id: 6, product_name: 'Bag', price: '₹ 25', quantity: '10 pcs' },
    { id: 7, product_name: 'Hat', price: '₹ 50', quantity: '20 pcs' }
];

// Get all, sort and limit 
// localhost:3004/user?sort=desc&limit=1
router.get('/', (req, res, next) => {
    const sort = req.query.sort;
    if (sort === 'asc') {
        cartItem.sort((a, b) => a.product_name.localeCompare(b.product_name));
    } else if (sort === 'desc') {
        cartItem.sort((a, b) => b.product_name.localeCompare(a.product_name));
    }

    const limit = Number(req.query.limit);
    if (limit > 0 && limit <= cartItem.length) {
        return res.json(cartItem.slice(0, limit));
    }
    else if (limit > cartItem.length) {
        const err = new Error("Limit exceeds the number of cartItem available")
        err.status = 400;
        return next(err)
    }

    // If no sort parameter provided and no limit. return all cartItem
    if (cartItem.length === 0) {
        const err = new Error("Users not found")
        err.status = 404;
        return next(err)
    }
    res.json(cartItem);
});

// READ - GET user by id
// localhost:3004/user/1
router.get('/GetByID/:id', function (req, res, next) {
    const id = req.params.id;
    const user = cartItem.filter(item => item.id == id)
    if (user.length === 0) {
        const err = new Error("cartItem does not exist ?")
        err.status = 404;
        return next(err)
    }
    res.json(user)
})

// CREATE - POST a new user
router.post('/create', (req, res, next) => {
    const { product_name, price, quantity } = req.body;
    if (!product_name || !price || !quantity) {
        const err = new Error("product_name, price, quantity. Missing required fields");
        err.status = 400; // Bad Request
        return next(err);
    }
    const id = cartItem.length + 1;
    const newUser = { id, product_name, price, quantity };
    cartItem.push(newUser);
    res.status(200).json({msg: "create Successful" , UserData:newUser});
});

// UPDATE - PUT update user by id
router.put('/update/:id', (req, res, next) => {
    const id = Number(req.params.id)
    const index = cartItem.findIndex(item => item.id === id);
    if (index === -1) {
        const err = new Error("cartItem does not exist. Not update by ID!")
        err.status = 404;
        return next(err)
    }
    cartItem[index] = { ...cartItem[index], ...req.body };
    res.json(cartItem[index]);
});

// DELETE - DELETE user by id
router.delete('/delete/:id', (req, res, next) => {
    const id = Number(req.params.id)
    const initialLength = cartItem.length;
    cartItem = cartItem.filter(item => item.id != id);
    // console.log('After deleted item :',cartItem);
    if (cartItem.length === initialLength){
        const err = new Error("cartItem does not exist. Not deleted by ID!")
        err.status = 404;
        return next(err)
    }
    res.json({msg:"cartItem successfully deleted"});
});
 
export default router;