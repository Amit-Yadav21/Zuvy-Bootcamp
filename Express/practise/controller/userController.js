let users = [
    { id: 1, name: 'Arti', email: 'arti@gamil.com' },
    { id: 2, name: 'Samar', email: 'samar@gmail.com' },
    { id: 3, name: 'Amar', email: 'amar@gamil.com' },
    { id: 4, name: 'Sushil', email: 'sushil@gmail.com' },
    { id: 5, name: 'Ashok', email: 'ashok@gmail.com' },
    { id: 6, name: 'Avdhesh', email: 'avdhesh@gmail.com' },
    { id: 7, name: 'Ajay', email: 'ajay@ajay.com' }
];

// const getUserItem = (req, res) => {

//     const sort = req.query.sort;
//     if (sort === 'asc') {
//         users.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (sort === 'desc') {
//         users.sort((a, b) => b.name.localeCompare(a.name));
//     }

//     const limit = Number(req.query.limit);
//     if(limit > 0 && limit <= users.length){
//         return res.json(users.slice(0, limit))
//     }
//     else if(limit > users.length){
//         return res.status(404).json({ msg: 'Cart Item not found' });
//     }

//     if(users.length===0){
//         return res.status(404).json('user data not found')
//     }
//     res.json(users);    
// }

// const create = (req, res)=>{
//     const { name, email } = req.body;
//     if(!name || !email){
//         return res.status(404).json('name and eamil require...')
//     }
//     const id = users.length +1;
//     const newUserData = {id, name, email}
//     users.push(newUserData)
//     res.status(200).json({msg:'craete successfully', new:newUserData})
// }

// const update = (req, res) =>{
//     const id = Number(req.params.id);
//     const updateItem = users.find((item)=> item.id===id);
//     if(updateItem){
//         Object.assign(updateItem, req.body);
//         res.json({ msg: `user item with ID ${id} successfully updated.`, UserItem: updateItem });
//     }
//     else{
//         res.json({ msg: `user item with ID ${id} not found.`})
//     }
// }

// const deleteuser = (req, res) =>{
//     const id = Number(req.params.id);
//     const initialLength = users.length
//     users = users.filter((item)=> item.id !=id);
//     if (users.length === initialLength){
//         return res.status(404).json({ msg: `Cart item with ID ${id} not exist...!`});
//     }
//     res.json({msg:`user item with ID ${id} successfully deleted.`});
// }


// export { getUserItem, create, update, deleteuser }

const getAllUser = (req, res, next) => {
    const sort = req.query.sort;
    if (sort === 'asc') {
        users.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if (sort === 'desc') {
        users.sort((a, b) => b.name.localeCompare(a.name))
    }

    const limit = Number(req.query.limit);
    if (limit > 0 && limit <= users.length) {
        return res.json(users.slice(0, limit))
    }
    else if (limit > users.length) {
        const err = new Error("user limi not found...")
        err.status = 404;
        return next(err)
    }

    if (users.length === 0) {
        const err = new Error("'user not found..")
        err.status = 404;
        return next(err)
    }
    res.json(users)
}

const createUser = (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) {
        const err = new Error("name and email frequire...")
        err.status = 404;
        return next(err)
    }
    const id = users.length + 1;
    const newData = { id, name, email }
    users.push(newData)
    res.status(200).json({ msg: 'create user successfully', craete: newData })
}

const updateUser = (req, res) =>{
    const updateId = Number(req.params.id);
    const userUpdate = users.find((item) => item.id === updateId);
    if(userUpdate){
        Object.assign(userUpdate, req.body);
        res.status(200).json({msg:'update successfully...', updated:userUpdate})
    }
    else{
        const err = new Error(`this id ${updateId} not found!`)
        err.status = 404;
        return next(err)
    }
}

const deleteUser = (req, res)=>{
    const id = Number(req.params.id);
    const initialLength = users.length
    users = users.filter((item)=> item.id !=id);
    if (users.length === initialLength){
        const err = new Error(`user item with ID ${id} not exist...!`)
        err.status = 404;
        return next(err)
    } 
    res.json({msg:`user item with ID ${id} successfully deleted.`});
}

export { getAllUser, createUser, updateUser, deleteUser }