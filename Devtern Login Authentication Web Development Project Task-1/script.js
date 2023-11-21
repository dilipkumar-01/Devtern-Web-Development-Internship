const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

// Define user credentials (replace this with your actual user database or backend storage)
const users = [
    { email: 'user@gmail.com', password: '123' },
    { email: 'user@example.com', password: '123' },
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    // Add more user credentials as needed
];

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const enteredEmail = document.getElementById('email').value;
    const enteredPassword = document.getElementById('password').value;

    // Check if entered credentials match any user
    const user = users.find(
        (user) => user.email === enteredEmail && user.password === enteredPassword
    );

    if (user) {
        // Successful login
        alert('Login successful! Redirecting...');
    } else {
        // Display error message for incorrect login
        loginError.textContent = 'Invalid email or password. Please try again.';
        loginError.style.display = 'block'; // Show the error message
    }
});

// Function to toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.querySelector('.toggle-password ion-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.setAttribute('name', 'lock-closed'); // Change icon to lock-closed when password is hidden
    } 
    else {
        passwordInput.type = 'password';
        passwordIcon.setAttribute('name', 'lock-open'); // Change icon to lock-open when password is visible
    }
} 





