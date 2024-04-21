// Form elemanlarını al
const regForm = document.getElementById("register__form");
const nicknameInput=document.getElementById("nickname")
const regEmailInput = document.getElementById("reg_email");
const regEmailCheckInput=document.getElementById("reg_email_check")
const regPasswordInput = document.getElementById("reg_password");
const regPasswordCheckInput=document.getElementById("reg_password_check")
const regCountryInput = document.getElementById("reg_country");
const checkbox=document.getElementById("check13yas")

let users = JSON.parse(localStorage.getItem("users")) || [];


function handleCheckboxChange() {
    if (checkbox.checked) {
        console.log("Checkbox işarətlənib.");
        return true
    } else {
        console.log("Checkbox işarətlənməyib.");
        alert("13 yasdan boyuk olduquunuzu tesdiqleyin")
        return false
    }
}
function isEmailValid(email,emailCheck) {
    const existingUser = users.find(user => user.email === email);
    if(email === emailCheck){
        if (existingUser) {
        alert("Bu e-posta daha önce kullanılmış.");
        return false;
        }else{
        return true;
        }
    }else{
        alert(" Emailler ferqlidir duzgun dogrulayin")
    }
}
function isPasswordValid(password ,checkPassword) {

    if (password === checkPassword) {
    
    if (password.length < 8) {
        alert("Şifrəniz ən az 8 simvol uzunluğunda olmalıdır.",);
        return false;
    }else{
    return true;
    }

    }
    else{
        alert("password  eymi deyil")
    }
}
function areInputsFilled() {
    if (!regEmailInput.value || !regEmailInput.value){
        alert("Lütfən, bütün zəruri sahələri doldurun.");
        return false;
    }
    return true;
}
function clearForm() {
    regEmailInput.value = "";
    regPasswordInput.value = "";
    checkbox.checked
}
function handleFormSubmission(event) {

    
    const email = regEmailInput.value;
    const password = regPasswordInput.value;
    const checkPassword=regPasswordCheckInput.value
    const country = regCountryInput.value;
    const nick=nicknameInput.value
    let newUser = {
        email: email,
        password: password,
        country: country,
        "nickname":nick
        
    };

    
    if (!isPasswordValid(password,checkPassword) || !isNicknameValid(nick)) {
        return; 
    }else{

    
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    clearForm();
    alert("Qeydiyyat uğurla tamamlandı! " );
    }
}
function changeForm(){

    const formChange =document.getElementById("form__change") 
    const formChange2 =document.getElementById("form__change2") 
    const email = regEmailInput.value;
    const emailCheck =regEmailCheckInput.value
    if ( !isEmailValid(email,emailCheck)  || !handleCheckboxChange()|| !areInputsFilled()) {
        return; 
    }
    formChange.classList.toggle("d-none")
    formChange2.classList.toggle("d-none")
    
    


}

function isNicknameValid(nick){
    const existingUser = users.find(user => user.nickname === nick);
    if (existingUser) {
        alert("Bu Hesap Adı daha önce kullanılmış.");
        return false;
    }
        return true;
        
}
regForm.addEventListener("submit", handleFormSubmission);
