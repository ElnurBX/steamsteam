//!dil buttonu
console.log("hello");
const langBtn=document.getElementById("lang")
const langPopup=document.getElementById("langPopup")
langBtn.addEventListener('click',(e)=>{
    console.log("heleo");
    langPopup.classList.toggle("popup_menu")
})

//!formdaki məni xatirla butonu
const remember=document.getElementById("checkBoks")
const check=document.getElementById("check")

remember.addEventListener('click',(e)=>{
    console.log("hello");
    check.classList.toggle("d-none")
})