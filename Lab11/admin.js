let wsUrl= "ws://localhost:8080";
let connection= new WebSocket(wsUrl);

connection.onopen=function(){
    console.log("connected");
      connection.send(`connect:${document.querySelector("#userid").innerText}`)
}
connection.onmessage=function(e){
    let msg= e.data;
    let splitMsg= msg.split(":");
    if(splitMsg[0]=="newconx")
    {
        let element= document.createElement("li");
        element1.innerText=splitMsg[1];   
        element2.innerText=splitMsg[2]; 
        element3.innerText=splitMsg[3];  
        element4.innerText=splitMsg[4]; 

        element1.appendChild(document.createTextNode("First Name"));
        document.querySelector("#adminsection ul").appendChild(element1);
       
        element2.appendChild(document.createTextNode("Last Name"));
        document.querySelector("#adminsection ul").appendChild(element2);
        
        element3.appendChild(document.createTextNode("Gender"));
        document.querySelector("#adminsection ul").appendChild(element3);
         
        element4.appendChild(document.createTextNode("Description"));
        document.querySelector("#adminsection ul").appendChild(element4);


         

         
    }
}
