document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registrationForm = document.getElementById('registration-form');
    const successMessage = document.getElementById('success-message');
    const loginError = document.getElementById('login-error');
    const registrationError = document.getElementById('registration-error');

    document.getElementById('show-login').addEventListener('click', () => {
        loginForm.classList.remove('d-none');
        registrationForm.classList.add('d-none');
        successMessage.classList.add('d-none');
        loginError.classList.add('d-none');
    });

    document.getElementById('show-registration').addEventListener('click', () => {
        registrationForm.classList.remove('d-none');
        loginForm.classList.add('d-none');
        successMessage.classList.add('d-none');
        registrationError.classList.add('d-none');
    });

    document.getElementById('registration-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('reg-username').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const password2 = document.getElementById('reg-password2').value;

        if (password !== password2) {
            registrationError.textContent = 'Passwords do not match.';
            registrationError.classList.remove('d-none');
            return;
        } else {
            registrationError.classList.add('d-none');
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.username === username)) {
            alert('Error: Username already exists.');
            return;
        }

        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! You can now log in.');

        registrationForm.reset();
        registrationForm.classList.add('d-none');
        loginForm.classList.remove('d-none');
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            loginError.classList.add('d-none');
            loginForm.reset();
            loginForm.classList.add('d-none');
            successMessage.classList.remove('d-none');
            setTimeout(() => {
                successMessage.classList.add('d-none');
            }, 3000);
        } else {
            loginError.textContent = 'Invalid username or password.';
            loginError.classList.remove('d-none');
        }
    });
});
