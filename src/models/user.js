import mongoose from 'mongoose';

    const User = new mongoose.Schema({
        id : Number,
        name :  String,
        email : String
    },
    {
        versionKey:false
    }
    );

const Usuario = mongoose.model('users', User);

export default Usuario;