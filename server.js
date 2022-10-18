import express from "express";
const app= express();


app.use(express.json());

var db=[
    {
        id:"1",
        name:"sachin"
    }
]

app.get("/db",(req,res)=>{
    res.send(
        {
            data:db,
            success:true,
            massage:"data fetched succesfully"
        }
    )
})


app.post("/db",(req,res)=>{
    var name = req.body.name

    if(name){
        db.push(
            {
                id:(db.length +1).toString(),
                name:name
            }
        )
        
        res.send(
            {
                success:true,
                massage:"data added succesfully"
            }
        )
    }
    else {
        res.send(
            {
                success:false,
                massage:"validation error",
                error:[
                    {
                        field:"name",
                        massage:"could not be empaty"
                    }
                    
                ]
            }
        )
    }

})




app.delete("/db/:id",(req,res)=>{
    var id=req.params.id
    var newDB=db.filter(el=>el.id!=id)
    db=newDB

    res.send(
        {
            success:true,
            massage:"data deleted"
        }
    )

})




app.put("/db/:id",(req,res)=>{
    var id=req.params.id
    var name=req.body.name

    if(name){
        var index=db.findIndex(el=>el.id==id)
    db[index]={
        ...db[index],
        name:name
    }

    res.send(
        {
            success:true,
            massage:"data updated"
        }
    )
    }


    else {
        res.send(
            {
                success:false,
                massage:"validation error",
                error:[
                    {
                        field:"name",
                        massage:"could not be empaty"
                    }
                    
                ]
            }
        )
    }


})






app.listen(1000,(req,res)=>{
    console.log("Server running!")
})