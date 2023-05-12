let formulario = document.getElementById('form')
let inputs = document.querySelectorAll('.required')
let span = document.querySelectorAll('.span-required')
let emailRegex = /^\w+({-+.'}\w+)*@\w+({-.}\w+)*\.\w+({-.}\w+)*$/;

 formulario.addEventListener('submit', (event) =>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    passwordValidate();
    password2Validate();
 })

function setError(index){
    inputs[index].style.border ='1px solid red'
    span[index].style.display = 'block'
}

function removeError(index){
    inputs[index].style.border =''
    span[index].style.display = 'none'
}

function nameValidate(){
    if (inputs[0].value.length < 4){
        setError(0);
    } else{
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(inputs[1].value)){
        setError(1);
    }else{
        removeError(1);
    }
}

function passwordValidate(){
    if(inputs[2].value.length < 8){
        setError(2)
    }else{
        removeError(2)
        password2Validate();
    }
}
function password2Validate(){
    if(inputs[2].value == inputs[3].value && inputs[3].value.length >= 8){
        removeError(3)
    }else{
        setError(3)
    }
}