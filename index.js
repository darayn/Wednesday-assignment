const { json } = require('body-parser');
const express = require('express');


const app = express();

app.use(express.json())
const PORT = 4000




app.get("/",(req, res) =>{

    res.status(200).json({
        message: "Hello World"
    })
})



// string - can have more than 50 characters - tweet
// hr@we

app.post("/chunk", (req, res)=>{

    const reqLen = 50
    const msg = req.body.tweet
    const size = Math.ceil(msg.length/reqLen)
    const r = Array(size)
    let offset = 0
    
    for (let i = 0; i < size; i++) {
      r[i] = `${i+1}/${size} ` + msg.substr(offset, reqLen)
      offset += reqLen
    }


    res.status(200).send(JSON.stringify(r));
  


})



app.listen(PORT,()=>{
    console.log("Server running on 4000");
})

module.exports = {app}