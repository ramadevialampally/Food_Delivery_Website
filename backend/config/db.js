import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://ramadevialampally1819:ramadevi@cluster0.mn8w7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0//Food Delivey').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.