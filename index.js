const express = require("express")
console.log(typeof express)

const app = express()


/**
 * see the req-res cycle 
 */
app.get('/' ,(req ,res)=>{
    res.send("hello from the express server ")
})


/**
 * express server
 */
app.listen(800,()=>{
    console.log(" server got started")
})