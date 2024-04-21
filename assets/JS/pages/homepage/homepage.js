// `personalbar`, `atonticaton` ve `nickname_d` öğelerini seçin
const personalbar = document.querySelector(".personalnav");
const atonticaton = document.querySelector(".atonticaton");
const nickname_d = document.querySelector(".nickname_d");

// `activeUser` dizisini `sessionStorage`'dan alın
let activeUser = JSON.parse(sessionStorage.getItem("activeUser")) || [];

// Oturum açmış kullanıcı kontrolü
if (activeUser.length > 0) {
    console.log("Oturum açmış bir kullanıcı mevcut.");

    // Kullanıcı verilerini alın
    const user = activeUser[0];

    // `personalbar`, `atonticaton` ve `nickname_d` öğelerinin mevcut olup olmadığını kontrol edin
    if (personalbar && atonticaton && nickname_d) {
        // `personalbar` içeriğini `atonticaton` içeriğiyle değiştirin
        
        personalbar.innerHTML = atonticaton.innerHTML;
        // `nickname_d`'ya kullanıcı adını atayın
        let newItem=document.createElementNS("span")
        newItem=activeUser[0].nickname
        nickname_d.append(newItem)
    } else {
        console.error("`personalnav`, `atonticaton` veya `nickname_d` öğeleri bulunamadı.");
    }
}
