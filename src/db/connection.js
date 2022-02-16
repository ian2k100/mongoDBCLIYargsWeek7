require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URL);

const connection = async () => {
    try{
        await client.connect();
        const db = client.db("Movies");
        return db.collection("movie");
    } catch (error){
        console.log(error)
    }
}

module.exports = {client, connection};