const userData = [
    {id:1, username:"Ram", password:"Ram@123"}
]
const createUser = (req, res) =>{
    const { username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({msg:"username and password is require."})
    }

    const id = userData.length + 1;
    const newData = {id, username, password}
    userData.push(newData)
    res.status(200).json({msg:'create new user successfully', NewData:newData})
}

const getAllUser = (req, res, next)=>{
    if (userData.length === 0){
        const err = new Error("User signup data not found ?")
        err.status = 404;
        return next(err)
    }
    res.json({msg:'All signup data', userData})
}

const loginUser = (req, res, next)=>{
    const {username, password} = req.body;
    const loginUser = userData.find((item)=> item.username === username && item.password === password);
    if(loginUser){
        res.json({msg:"login successgully."})
    }
    else{
        const err = new Error("login failed..")
        err.status = 404;
        return next(err)
    }
}

export {createUser, getAllUser, loginUser}