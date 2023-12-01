import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    email:{
        type: String, 
        unique: true
    }
})
const Test = models.Test || model("Test", testSchema);

export default Test; 