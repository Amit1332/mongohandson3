const app = require("./app");
const database = require("./config/db");



app.listen("8000",()=>{
    try {
database()
console.log("server started");
        
    } catch (error) {
        console.log(err, "no connectio");
    }
})