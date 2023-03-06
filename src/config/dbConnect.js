import mongoose from 'mongoose';

mongoose.set("strictQuery", true);

mongoose.connect(process.env.DATA_BASE,{
    useNewUrlParser:true,
    useUnifiedtopology:true
});

let db = mongoose.connection;

export default db