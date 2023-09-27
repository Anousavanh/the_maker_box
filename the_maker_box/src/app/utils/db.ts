// import mongoose from 'mongoose';

// const connect = async () => {
//     try {
//         const mongoURI = process.env.MONGO_URI || 'mongodb+srv://makerbox:makerbox@cluster0.nmgidyb.mongodb.net/test?retryWrites=true&w=majority';
//         await mongoose.connect(mongoURI);
        
//         //await mongoose.connect('mongodb+srv://makerbox:makerbox@cluster0.nmgidyb.mongodb.net/moment?retryWrites=true&w=majority')
//         // console.log('Connected to MongoDB');
//     } catch (error) {
//         throw new Error('Connection failed!');
//     }
// };

// export default connect;

//---
// import mongoose from 'mongoose';

// const connect = async () => {
//     try {
//         const mongoURI = process.env.MONGO_URI || 'mongodb+srv://makerbox:makerbox@cluster0.nmgidyb.mongodb.net/test?retryWrites=true&w=majority';
        
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log('Connected to MongoDB');
//     } catch (error) {
//         throw new Error(`Database connection failed: ${(error as Error).message}`);
//     }
// };

// export default connect;

import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://makerbox:makerbox@cluster0.nmgidyb.mongodb.net/test?retryWrites=true&w=majority');
      } catch (error) {
        throw new Error('Connection failed!');
      }
      
}

export default connect;