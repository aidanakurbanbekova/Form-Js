const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    //NAME
    if (name.value.trim() === '') {
        setError(name, 'Username is required')
    }else {
        success(name)
        name.value = '';
    }
    //PASSWORD
    if (password.value.trim() === '' ){
       setError(password, 'password can not be empty');
    }else if (password.value.length <= 6){
        setError(password,'Not less 6 characters')
    }else {
        success(password);
        password.value = '';
    }
});

const setError = (element, message) => {
    element.style.border = '2px red solid';
    const parent= element.parentElement;
    const span = parent.querySelector('.error');
    span.innerText = message;
    span.style.visibility = 'visible';
}
const success = (element) =>{
    element.style.border = '2px green solid';
    const parent= element.parentElement;
    const span = parent.querySelector('.error');
    span.style.visibility = 'hidden';
}










