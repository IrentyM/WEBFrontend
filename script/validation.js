const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const resetBtn = document.getElementById('reset-btn');

const steps = document.querySelectorAll('.step');
let currentStep = 0;

const showStep = (step) => {
    steps.forEach((s, index) => {
        s.classList.toggle('active', index === step);
    });
};

document.getElementById('next1').addEventListener('click', () => {
    if (validateStep1()) {
        currentStep++;
        showStep(currentStep);
    }
});

document.getElementById('next2').addEventListener('click', () => {
    if (validateStep2()) {
        currentStep++;
        showStep(currentStep);
    }
});

document.getElementById('back1').addEventListener('click', () => {
    currentStep--;
    showStep(currentStep);
});

document.getElementById('back2').addEventListener('click', () => {
    currentStep--;
    showStep(currentStep);
});

form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateFinalStep()) {
        alert('You have successfully registered!');
    }
});

resetBtn.addEventListener('click', () => {
    document.querySelectorAll('input').forEach(input => input.value = ''); 
    document.querySelectorAll('.error').forEach(error => error.innerText = '');
    document.querySelectorAll('.input-control').forEach(control => {
        control.classList.remove('error', 'success'); 
    });
    currentStep = 0;
    showStep(currentStep);
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateStep1 = () => {
    const usernameValue = username.value.trim();
    let isValid = true; 

    if (usernameValue === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    return isValid;
};

const validateStep2 = () => {
    const emailValue = email.value.trim();
    let isValid = true; 

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    return isValid;
};

const validateFinalStep = () => {
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let isValid = true; 

    if (passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
        isValid = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
        isValid = false;
    } else {
        setSuccess(password2);
    }

    return isValid;
};

showStep(currentStep);
