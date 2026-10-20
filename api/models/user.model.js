import mongoose from "mongoose";
import { type } from "node:os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
     email: {
        type: String,
        required: true,
        unique: true,
    },
     password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhppa9rXrapEu5CKdlFSdJkSHsBmRiTbfHXrKR6ehVw&s=10"
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;