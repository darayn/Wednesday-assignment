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

    

    const msg = req.body.tweet
    
    regex =  /\S.{0,45}\S(?= |$)/g
    let chunks = msg.match(regex);
    
    const totalChunks = chunks.length


    // console.log(totalChunks);

    for (let index = 1; index <= chunks.length; index++) {
        chunks[index - 1] = `${index}/${totalChunks} ` + chunks[index - 1]
        
    }
    res.status(200).send(JSON.stringify(chunks));
  


})



app.listen(PORT,()=>{
    console.log("Server running on 4000");
})

module.exports = {app}