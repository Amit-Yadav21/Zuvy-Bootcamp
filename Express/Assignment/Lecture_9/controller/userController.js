const userData = [
    {id:1, username:"Amit", password:"Amit@123"},
    {id:2, username:"Rahul", password:"Rahul@123"},
    {id:3, username:"Paras", password:"Paras@123"},
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

const loginUser = (req, res)=>{
    const {username, password} = req.body;
    const loginUser = userData.find((item)=> item.username === username && item.password === password);
    if(!loginUser){
        res.status(401).json({msg:"username and password is incorrect"})
    }
    else{
        req.session.user = loginUser;
        res.status(200).json({msg:"login successfully.", loginUser})
    }
}

const getAllData = (req, res)=>{
    const user = req.session.user;
    if (!user) {
        return res.status(401).json({ msg: "User not logged in" });
    }
    res.status(200).json({ msg: "User found ", user });
}

export {createUser, getAllData, loginUser}