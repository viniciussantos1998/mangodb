const express= require("express")
const app = express()

app.listen(3000, function(){
    console.log("o nosso servidor está rodando na porta 3000")
})

app.get("/ver", (req, res)=>{
    res.send("olá mundo!")
})