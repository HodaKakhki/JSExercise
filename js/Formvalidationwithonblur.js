let $ = document

let usernameInput = $.querySelector('.username')
let passwordInput = $.querySelector('.password')


let usernameMessage=$.querySelector('.username-validation')
let passwordMessage = $.querySelector('.password-validation')

function usernameValidation() {

    if (usernameInput.length < 12) {
        usernameMessage.value.innerHTML = 'Must be at least 12 characters'
        usernameMessage.style.color = 'red'
        usernameMessage.style.display = 'block'
    } else {
        usernameMessage.innerHTML = 'Correct username Value'
        usernameMessage.style.color = 'green'  
        usernameMessage.style.display = 'block'
    }
}
 
function passwordValidation() { 
    if (passwordInput.value.length < 8) {
        passwordMessage.innerHTML = 'Please enter at least 8 characters'
        passwordMessage.style.color = 'red'
        passwordMessage.style.display = 'block'
    }else {
        usernameMessage.innerHTML = 'Correct password Value'
        usernameMessage.style.color = 'green'  
        usernameMessage.style.display = 'block'
    }
}