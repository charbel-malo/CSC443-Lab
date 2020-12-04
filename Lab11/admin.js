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
        element1.innerText=splitMsg[1];   //first name
        element2.innerText=splitMsg[2];   //last name
        element3.innerText=splitMsg[3];   //gender
        element4.innerText=splitMsg[4];   //desc
           let line= document.createElement("hr");

        element1.appendChild(document.createTextNode("First Name"));
        document.querySelector("#AdminDisplay ul").appendChild(element1);
       
        element2.appendChild(document.createTextNode("Last Name"));
        document.querySelector("#AdminDisplay ul").appendChild(element2);
        
        element3.appendChild(document.createTextNode("Gender"));
        document.querySelector("#AdminDisplay ul").appendChild(element3);
         
        element4.appendChild(document.createTextNode("Description"));
        document.querySelector("#AdminDisplay ul").appendChild(element4);


        document.querySelector("#AdminDisplay ul").appendChild(line);

         

         
    }
}
