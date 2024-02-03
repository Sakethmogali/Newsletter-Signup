const content_class = document.getElementsByClassName("content-cont")[0];
const img_class = document.getElementsByClassName("img-cont")[0];
const cont=document.getElementsByClassName("main-cont")[0];
const message = document.getElementsByClassName("message")[0];
const mail=document.querySelector("#input-email");
const display_email = document.querySelector("b")
console.log(display_email);
const success=()=>{
    const str=mail.value;
    message.classList.remove("remove");
    display_email.innerHTML=str;
    cont.classList.add("remove");    
}
const goback=()=>{
    mail.value="";
     message.classList.add("remove");
    cont.classList.remove("remove");
}