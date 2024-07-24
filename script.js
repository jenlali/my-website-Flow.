const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const confirm_passwordValue = confirm_password.value.trim();
    const emailValue = email.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    }
    else {
        
        setSuccess(password)
    }

    if(confirm_passwordValue === ''){
        setError(confirm_password, 'Password is required');
    } else if 
        (confirm_passwordValue !== passwordValue){
            setError(confirm_password, 'Passwords doesnt match');
        }

    if(email===''){
        setError(email,'Email is required');
    }
    else {
        setSuccess(email)
    }
};



