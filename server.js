const express=require("express");
const cors=require("cors");
const app=express();
const port = 3001;
app.use(cors());
app.use(express.json());

app.get('/getdata/:id',(req,res)=>{
    console.log(req.params.id);
    res.send("hello world");
});
app.post('/createdata',(req,res)=>{
    const data=req.body;
    console.log(data);
    res.send('Data received');
})

app.listen(port,()=>{
    console.log("Sever is running on port",{port});
});

http://localhost:3001/getdata/http://localhost:3001/getdata/