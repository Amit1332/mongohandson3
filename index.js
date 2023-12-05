const app = require("./app");
const {connectToDatabase, database} = require("./config/db");
// const database = require("./config/db");


app.listen("8000",async()=>{
    try {
// database()
await connectToDatabase()
await database()
console.log("server started");
        
    } catch (error) {
        console.log(err, "no connectio");
    }
})