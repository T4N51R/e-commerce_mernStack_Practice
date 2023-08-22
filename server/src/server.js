const app = require("./app");
const { serverPort } = require("./secrate");

app.listen(serverPort, ()=>{
    console.log(`Server is running http://localhost:${serverPort}`)
})