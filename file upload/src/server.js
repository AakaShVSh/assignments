let app = require("./index")

let connect = require("./configs/db")

app.listen(5000,async()=>{
    try{
        await connect()
        console.log("running on port 5000")
    }
    catch(err){
        console.log(err.message)
    }
}); 