let btnChangeUser=document.getElementById("btnChangeUser")
let h1Pointer=document.querySelector('h1')


if(!localStorage.name){
    getName()
}

else{

    h1Pointer.textContent=`Mozilla is cool, ${localStorage.name}`

}


btnChangeUser.onclick=function(){
    getName()
}

function getName(){

let newName=prompt("Enter a name!")
if(newName === "" || newName == null)
{
    getName()

}
else
{
    localStorage.name=newName
    h1Pointer.textContent=`Mozilla is cool, ${localStorage.name}`
}



}