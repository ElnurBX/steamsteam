
const emailInput = document.getElementById("log_username");
const passwordInput = document.getElementById("log_password");
const logForm = document.getElementById("log_form");
let users = JSON.parse(localStorage.getItem("users")) || [];
let activeUser=JSON.parse(sessionStorage.getItem("activeUser")) || []

// Giriş formu gönderimi olayını işleyen işlev
function handleLoginFormSubmission(event) {
    

    if (activeUser && activeUser.length > 0) {
        alert("Artıq bir istifadəçi daxil olub. Zəhmət olmasa, başqa bir istifadəçi giriş etməyə çalışmasın.");
        return; 
        
    }



    const nick = emailInput.value;
    const password = passwordInput.value;

    const userTest = users.find(user => user.nickname === nick && user.password === password);


    if (!userTest) { 
        event.preventDefault();
        alert("E-poçt və ya parol yanlışdır. Zəhmət olmasa, yenidən cəhd edin.");
        return;

    }
    
    alert("Xoş gəlmisiniz! :)");
    activeUser = [userTest]; 
    sessionStorage.setItem("activeUser", JSON.stringify(activeUser));

}


logForm.addEventListener("submit", handleLoginFormSubmission);

