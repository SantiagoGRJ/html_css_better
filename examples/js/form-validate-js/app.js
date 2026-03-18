const formSignUp = document.getElementById("formSignUp")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const confirmPasswordInput = document.getElementById("confirmPassword")

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const confirmError = document.getElementById("confirmPasswordError")

const result = document.getElementById("result")

function showError(el, message) {
    el.innerHTML = message;
}

function clearError(el) {
    el.innerHTML = ""
}

function validateForm() {
    let okName = validateName()
    let okEmail = validateEmail()
    let okPassword = validatePassword()
    let okConfirm = validateConfirm()
    return okName && okEmail && okPassword && okConfirm
}

function validateName() {
    let value = nameInput.value.trim()
    if (value.length < 2) {
        showError(nameError, "Name must be at least 2 characters")
        return false
    }
    clearError(nameError)
    return true
}

function validateEmail() {
    let value = emailInput.value.trim()

    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
        showError(emailError, "Enter a valid email address.");
        return false;
    }
    clearError(emailError)
    return true
}

function validatePassword(){
    let password = passwordInput.value
    
    if(password.length < 8){
        showError(passwordError,"Password must be at least 8 characters.")
        return false 
    }
    clearError(passwordError)
    return true
}
function validateConfirm(){
    let password = passwordInput.value
    let passwordConfirm = confirmPasswordInput.value

    if(passwordConfirm === ""){
        showError(confirmError,"Please confirm your password")
        return false
    }
    if(passwordConfirm !== password){
        showError(confirmError,"Password do not match.")
        return false
    }
    clearError(confirmError)
    return true
}

formSignUp.addEventListener("submit", function (event) {
    event.preventDefault()

    result.innerHTML = ""

    if (validateForm()) {
        result.innerHTML = "Form is valid!"
        result.className = "ok"
    } else {
        result.innerHTML = "Please fix the errors.";
        result.className = "error";
    }
})