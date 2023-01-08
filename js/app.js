const loginForm = document.querySelector("#login-form");    // html 로그인 폼
const content = document.querySelector("#content-wrapper");

const loginInput = loginForm.querySelector("input");    //
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    console.log(username);
    paintGreetings(username);
    content.classList.remove(HIDDEN_CLASSNAME);
}
 
function paintGreetings() {
    const username = localStorage.username;
    console.dir(username);
    greeting.innerText = `hello, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
    //show form
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    content.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings();
}
