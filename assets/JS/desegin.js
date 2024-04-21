//!dil buttonu

const langBtn=document.getElementById("lang")
const langPopup=document.getElementById("langPopup")
langBtn.addEventListener('click',(e)=>{
    langPopup.classList.toggle("popup_menu")
})

//!formdaki məni xatirla butonu
const remember = document.getElementById("checkBoks");
const check = document.getElementById("check");

if (remember && check) {
    remember.addEventListener('click', (e) => {
        check.classList.toggle("d-none");
    });
}

//! formun megzini deyisir

