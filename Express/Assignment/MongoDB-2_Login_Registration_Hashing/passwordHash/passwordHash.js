import bcrypt from 'bcrypt';
const saltRounds = 10;

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
}

const comparePasswordHash = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

export { hashPassword, comparePasswordHash };
