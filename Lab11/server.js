var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const fs = require('fs');
const ejs= require("ejs");
let webSocket= require("ws");
const { v4: uuidv4 } = require('uuid');
var cookieParser = require('cookie-parser')
const url1 = require('url'); 

const globalUser=[]; // we created an golabl array for the chat
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({     
        extended: true
      })); 
app.use(cookieParser())


app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});

app.use(express.static(__dirname+"/public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/home.html");
})



app.post("/adduser",function(req,res){


	let fname = req.body.fname;
	let lname = req.body.lname;
	let gender= req.body.gender;
	let desc = req.body.desc;

    
     let newid=uuidv4();
    let newObj={};
    // if(globalUser.find((val)=>{

    //     val.fname==username
    //     val.lname==username
    //     val.gender==username
    //     val.desc==username
    // }))
    // {
    //     res.redirect("/userExists");
    //     return;
    // }

    // Creating the object
    newObj.id=newid;
    newObj.fname=fname;
    newObj.lname=lname;
    newObj.gender=gender;
    newObj.desc=desc;

    //pushing the object to the global array
    globalUser.push(newObj)


    res.redirect(url1.format({
        pathname:"/admin",
        query: {
            "id":newid,
           "fname": fname,
           "lname": lname
            "gender": gender,
           "desc": desc,
         }
      }))
})

app.get("/admin",function(req,res){


    let UserFname= req.query.fname;
    let UserLname= req.query.lname;
    let UserGender= req.query.gender;
    let UserDesc= req.query.desc;


    

    ejs.renderFile(__dirname+"/public/admin.ejs",{id:thisid,fname:UserFnam, lname:UserLname , gender: UserGender , desc: UserDesc},function(e, dt) {
        res.send(dt);
      });
})



var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("listening on 8081");
 })

let ws= new webSocket.Server({port:8080});

ws.on("connection",function(thisWs){
    
    thisWs.on("message",function(msg){
        let splitMsg= msg.split(":");

        if(splitMsg[0]=="connect") //connection request
        {
            let userid= splitMsg[1];
            let username= splitMsg[2];
            //i saved the new connection's ws in the global object that has the connections user and id
            globalChat.forEach((val)=>{
                if(val.username==username && val.id == userid)
                {
                    val.websocket= thisWs;
                }
            })
            //i looped on the global array and sent to everyone but me that i connected
            //i also sent myself who is already connected
            globalChat.forEach((val)=>{
                if(val.username!=username && val.id != userid)
                {
                    val.websocket.send("newconx:"+username);
                    thisWs.send("newconx:"+val.username)
                }
            })
            
        }
    })
})

///// connect:id:username
///// newconx:username
///// disconx:id:username
///// msg:user1:user2:msg
///// broadcast:user1:msg