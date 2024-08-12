import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }]
});

// delete password, __v
userSchema.set('toJSON',{
    transform: (document, returnObject) =>{
        // returnObject.id = returnObject._id
        // delete returnObject._id

        delete returnObject.password
        delete returnObject.__v
    }
})

const User = mongoose.model('usercrud', userSchema);

export default User;