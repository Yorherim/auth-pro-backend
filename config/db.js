import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fcnm7.mongodb.net/${process.env.DB_TITLE}?retryWrites=true&w=majority`
        );
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};
