const wrapper =document.querySelector('.wrapper');
const loginLink =document.querySelector('.login-link');
const registerLink =document.querySelector('.register-link');
const btnPopup =document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');
const loginContainer = document.querySelector('.form-box.login');
const signupContainer = document.querySelector('.form-box.register');

registerLink.addEventListener('click',() => {
    wrapper.classList.add('show-signup');
});

loginLink.addEventListener('click',() => {
    wrapper.classList.remove('show-signup');
});

btnPopup.addEventListener('click',() => {
    wrapper.classList.add('show');
});

iconClose.addEventListener('click',() => {
    wrapper.classList.remove('show');
});

// signup
const signupBtn = document.querySelector("#signup-btn");
signupBtn.addEventListener("click", () => {
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    const payload = {
        username: username.value,
        email: email.value,
        password: password.value
    };

    const resetForm = () => {
        username.value = "";
        email.value = "";
        password.value = "";
    };
    alert(`Signup successful for the user ${payload.username}!`);
    resetForm();
});

// login
const loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener("click", () => {
    const email = document.querySelector("#login-email");
    const password = document.querySelector("#login-password");

    const payload = {
        email: email.value,
        password: password.value
    };

    const resetForm = () => {
        email.value = "";
        password.value = "";
    };
    alert(`Login successful for the user with email ${payload.email}!`);
    resetForm();
});