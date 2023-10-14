let userNameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.password');
let modal= document.querySelector('.modal');


const validationLogin = () => {
    let useNameValue=userNameInput.value
    let passwordValue = passwordInput.value
    
    if (useNameValue.length < 4 || passwordValue.length < 8) {
 modal.style.background = 'rgb(233,28,28'
        modal.innerHTML='لطفا اطلاعات را درست وارد کنید'
        modal.style.display = 'inline'
       
    }
    else {
        modal.style.background = 'green'
        modal.innerHTML='لاگین با موفقیت انجام شد'
        modal.style.display='inline'
    }
     setTimeout(() => {
           modal.style.display='none'
        }, 3000);
    console.log(useNameValue,passwordValue);
}