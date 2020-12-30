const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var users = [{
    id: 1,
    name: "John",
    age : 23,
    email: "john@gmail.com"
    }]
    app.get('/api/users', function(req, res){
        res.json(users); 
       });

app.post("/signup",(req,res)=>{
    users.push(req.body);
    res.json(users);

});
app.put("/update/:name",(req,res)=>{
    users.forEach((item)=>{
        if(item.name===req.params.name)
        {
            item.name=req.body.name;
            item.age=req.body.age;
            item.email=req.body.email;
        }
    
    })
    res.json(users)
})


app.delete("/delete/:name",(req,res)=>{
    users.forEach((item,index) =>{
        if(item.name===req.params.name)
        {
            users.splice(index,1)
        }
    })
    res.json(users)

})
app.listen(8000);