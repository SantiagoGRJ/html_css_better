const signUpForm = document.getElementById("signInForm")

const emailInput = document.getElementById("emailInput")
const emailError = document.getElementById("emailError")

const passwordInput = document.getElementById("passwordInput")
const passwordError = document.getElementById("passwordError")

const btn = document.getElementById("btnSignIn")




signUpForm.addEventListener("submit", function (event){
    event.preventDefault()

   if(validateForm()){
    
    btn.style.backgroundColor="green"
    btn.innerHTML="Correctly!"
   }else{
    
   }
})

function validateForm(){
    return validateEmail() && validatePassword()
}

function validateEmail(){
    let email = emailInput.value.trim()
    if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))){
        emailInput.style.border="1px solid red"
        emailError.innerHTML="Invalid Email"
        console.log("invalid email");
        
        return false
    }
    emailInput.style.border=""
    emailError.innerHTML=""
    return true
}
function validatePassword(){
    let password = passwordInput.value.trim()
    
    if(password.length<8){
        passwordInput.style.border="1px solid red"
        passwordError.innerHTML="Password must be greater to 8 characters"
        return false
    }
    passwordInput.style.border=""
    passwordError.innerHTML=""
    return true
}
