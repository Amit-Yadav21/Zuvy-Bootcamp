let todoListData = [
    {id:1, title:"Education", completed:false}
]
const createTodoList = (req, res, next) =>{
    const { title, completed} = req.body;
    if(!title || !completed){
        const err = new Error('title and completed both field are require.')
        err.status = 400;
        return next(err)
    }

    const id = todoListData.length + 1;
    const newData = {id, title, completed}
    todoListData.push(newData)
    res.status(200).json({msg:'create new user successfully', newTodoData:newData})
}

const getAllTodoList = (req, res, next)=>{
    if (todoListData.length === 0){
        const err = new Error('User signup data not found ?')
        err.status = 404;
        return next(err)
    }
    res.json({msg:'All todo data', todoListData})
}

const updateTodo = (req, res, next) =>{
    const id = Number(req.params.id);
    const findTodo = todoListData.find((item)=> item.id ===id);
    if (findTodo){
        Object.assign(findTodo, req.body)
        res.json({msg:`todo item updated with id ${id} successfully`, findTodo})
    }
    else{
        const err = new Error(`todo item not found id ${id}.`)
        err.status = 404;
        return next(err)
    }
}

const deleteTodo = (req, res, next) =>{
    const id = Number(req.params.id);
    const todoLenght = todoListData.length;
    todoListData = todoListData.filter((item)=> item.id !=id);
    if(todoListData.length === todoLenght){
        const err = new Error(`ID ${id} not found.`)
        err.status = 404;
        return next(err)
    }
    res.status(200).json({msg:`todo item delete this item ${id}`})
}

export {createTodoList, getAllTodoList, updateTodo, deleteTodo}