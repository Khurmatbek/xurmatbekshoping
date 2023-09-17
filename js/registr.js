const form = document.querySelector(".registr__form");
const emailInput = document.querySelector(".registr__email-input");
const username = document.querySelector(".registr__username");
const usernumber = document.querySelector(".registr__usernumber");
const password = document.querySelector(".registr__password-input");
const registrArr = JSON.parse(localStorage.getItem("registrArr") || "[]");
localStorage.setItem("registrArr", JSON.stringify(registrArr));

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const emailInputValue = emailInput.value.trim();
    const usernameValue = username.value.trim();
    const usernumberValue = usernumber.value.trim();
    const passwordValue = password.value.trim();
    const registrObj = {
        id: registrArr.length ? registrArr.length + 1 : 1,
        email: emailInputValue,
        name: usernameValue,
        phone: usernumberValue,
        pass: passwordValue,
        product: [],
    }
    localStorage.setItem("userId", JSON.stringify(registrObj.id));
    if (usernameValue.length > 2 && usernumberValue.length > 12 && passwordValue.length > 7) {
        const finded = registrArr.find(item => {
            return item.pass = passwordValue && item.email == emailInputValue && item.name == usernameValue && item.phone == usernumberValue;
        })
        if (!finded) {
            registrArr.push(registrObj);
            localStorage.setItem("registrArr", JSON.stringify(registrArr));
            window.location.href = "index.html"
            return
        }
        else {
            alert("siz ro'yhatdan o'tgansz")
            window.location.href = "login.html"
        }
    }
    else {
        alert("To'ldirshda xatolik")
    }


})

