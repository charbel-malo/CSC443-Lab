//Exe1
// document.querySelector("#bt_press").addEventListener("click",()=>{
//     const textcontent= document.querySelector("#txt_word").value;
//     const arraycontent= textcontent.split("");
//     arraycontent.reverse();
//     document.querySelector("#dv_result").append(arraycontent.join(""));
// })

//Exe2

// const arr1= [1,2,3,4,5,6,7];
// const arr2= [2,3,5,8,9,0];

// document.querySelector("#bt_press").addEventListener("click",()=>{
//         if(arr1.length!=arr2.length)
//         {
//             document.querySelector("#dv_result").innerText="No Result, arrays are not of the same length";
//             return;
//         }
//         let sumofDiff=0;
//         arr1.forEach((val,idx)=>{
//             sumofDiff+= Math.abs(arr1[idx]-arr2[idx]);
//         })
//         document.querySelector("#dv_result").innerText=sumofDiff;
           
//     })

//Exe 3

// const dateNow= new Date();
// document.querySelector("#dv_result").innerText= `${dateNow.getFullYear()}/${dateNow.getMonth()+1}/${dateNow.getDate()}`;

//Exe4

// document.querySelector("#bt_press").addEventListener("click",()=>{
//     const textcontent= document.querySelector("#txt_word").value;
//     const arraycontent= textcontent.split(" ");
    
//     const trforTable= document.createElement("tr");
//     const td1=document.createElement("td");
//     td1.innerText=arraycontent[0];
//     const td2=document.createElement("td");
//     td2.innerText=arraycontent[1];

//     trforTable.appendChild(td1);
//     trforTable.appendChild(td2);
//     document.querySelector("tbody").appendChild(trforTable);
// })

//Exe5

// document.querySelector("#bt_press").addEventListener("click",()=>{
//     const textcontent= document.querySelector("#txt_word").value;
//     const arraycontent= textcontent.split(" ");
//     const resultArray= arraycontent.map((val)=>{
//         return val[0].toUpperCase() + val.slice(1);
//     })
//     const textresult= resultArray.join(" ")
//     document.querySelector("#dv_result").innerText=(textresult);
// })


//Exe6
//rowIdx columnIdx newVal
// document.querySelector("#bt_press").addEventListener("click",()=>{
//     const textcontent= document.querySelector("#txt_word").value;
//     const arraycontent= textcontent.split(" ");
//     const allTrs= Array.from(document.querySelector("tbody").querySelectorAll("tr"));
//     if(arraycontent[0]>=allTrs.length)
//     {
//         return;
//     }
//     const pickedTr= allTrs[arraycontent[0]];
//     const tdsInPickedTr= Array.from(pickedTr.querySelectorAll("td"));
//     if(arraycontent[1]>=tdsInPickedTr.length)
//     {
//         return;
//     }
//     const pickedTd= tdsInPickedTr[arraycontent[1]];
//     pickedTd.innerText=arraycontent[2];
// })

//Exe7
//drop for now
// document.querySelector("#bt_press").addEventListener("click",()=>{
//     const cars= document.querySelector("#cars");
//     cars.remove(cars.selectedIndex);
// })
//Exe8

// window.onresize= window.onload= ()=>{
//     document.querySelector("#dv_result").innerText= window.innerHeight +"; "+window.innerWidth;
// }
    
    
   