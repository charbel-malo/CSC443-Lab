const express = require('express')
const app = express();
const port = 8000;
const fs = require('fs');
var bodyParser=require('body-parser');
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({     extended: true })); 

app.get('/', function (req, res){
    res.sendFile('views/addprofile.html', {root: __dirname })
  })
app.post('/', function (req, res) { console.log("Got a POST request for the homepage");

 var name = req.body.name; 
 var htmlfilecomp = "<body><h1>";
 htmlfilecomp+=req.body.name;
 htmlfilecomp+="</h1><p>";
 htmlfilecomp+=req.body.desc;
 htmlfilecomp+="</p><img src='";
 htmlfilecomp+=req.body.imgurl;
 htmlfilecomp+="'><p>";
 htmlfilecomp+=req.body.gender;
 htmlfilecomp+="</p><p>";
 htmlfilecomp+=req.body.birthdate;
 htmlfilecomp+="</p><p style='color:"+req.body.favcol+" '>";
 htmlfilecomp+=req.body.favcol;
 htmlfilecomp+="</p><p>";
 fs.writeFile('public/'+name+'.html',htmlfilecomp, function (err) {
  if (err) return console.log(err);
  res.sendFile('public/'+name+'.html', {root: __dirname });
});
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

app.use(express.static('public'));
app.get('/process_post', function (req, res) { // Prepare output in JSON format 
response = { first_name:req.body.first_name, last_name:req.body.last_name };
res.end(JSON.stringify(response)); });
var server = app.listen(8081, function () { var host = server.address().address; var port = server.address().port })
