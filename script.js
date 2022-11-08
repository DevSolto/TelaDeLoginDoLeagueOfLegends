const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".login-button");

const handleFocus = ({ target }) =>{
    const span = target.previousElementSibling;
    span.classList.add("span-active");
}
const handleFocusOut = ({ target }) =>{
    if (target.value == ""){
        const span = target.previousElementSibling;
        span.classList.remove("span-active");
    }
}
const handleChange = () =>{
    const [userName, passWord] =inputs;
    if (userName.value && passWord.value.length >= 8){
        button.removeAttribute("disabled");
    }else{
        button.setAttribute("disabled", "true");
    }
}

inputs.forEach((inpt) => inpt.addEventListener("focus", handleFocus));
inputs.forEach((inpt) => inpt.addEventListener("focusout", handleFocusOut));
inputs.forEach((inpt) => inpt.addEventListener("input", handleChange));