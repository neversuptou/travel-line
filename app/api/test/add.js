import connectDB from "@/utils/connectToMongo";
import Test from "@/models/users";


/**
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function handler(req, res){
    const {username, password, email} = req.body;
    console.log("Try to connect to db");
    await connectDB()
    console.log("DB is connected");
    
    console.log("Creating document");
    const test  = await Test.create(req.body);
    console.log("Created document");

    res.json({ test });
}