const form = document.querySelector(".login__form");
const useremail = document.querySelector(".login__email-input");
const userpassword = document.querySelector(".login__password-input");
const loginArr = JSON.parse(localStorage.getItem("registrArr") || "[]");
// console.log(loginArr)
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const useremailValue = useremail.value.trim();
    const userpasswordValue = userpassword.value.trim();
    const finded = loginArr.find(item => {
        return item.pass == userpasswordValue && item.email == useremailValue;
    })
    if (finded) {
        window.location.href = "index.html";
    }
    else {
        alert("Ro'yhatdan o'tmagansiz  !")
        window.location.href = "registr.html";
    }
})


