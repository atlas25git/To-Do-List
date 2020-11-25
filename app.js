const ex = require("express");
const bp = require("body-parser");
var items =["Duga Radar",
            "Chinese Diplomacy",
            "Van eck Phreaking"];
var workItems=[];

const app = ex();

app.set('view engine', 'ejs');
app.use(bp.urlencoded({extended:true}));
app.use(ex.static("views"));

app.get("/",function(req,res){

    var today = new Date();
   
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day = today.toLocaleDateString("hi-IN",options);
    res.render("list",{listTitle :day,newListItem: items});
    console.log(day);
})

app.post("/",function(req,res){

    var item = req.body.newItem;
    
    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

    
})
app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work",newListItem:workItems});
})

app.listen(3000,function(){
    console.log("3000");
});