import bcrypt from 'bcrypt'
const saltRound = 10;

const hashPassword = async (password) =>{
    const salt = await bcrypt.genSalt(saltRound);
    return await bcrypt.hash(password, salt);
}

const comparePassowrdHash = async (password, hash) =>{
    return await bcrypt.compare(password, hash)
}

export{hashPassword, comparePassowrdHash};