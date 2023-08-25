const app = require("./app");
const connectDB = require("./config/db");
const { serverPort } = require("./secrate");

app.listen(serverPort,async ()=>{
    console.log(`Server is running http://localhost:${serverPort}`);
   await connectDB();
})