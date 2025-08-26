// Get elements
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const message = document.getElementById('p1');

// Password check function
function checkPasswords() {
    if (password1.value === '' || password2.value === '') {
        message.textContent = '';
        return;
    }
    if (password1.value === password2.value) {
        message.textContent = 'Your account is created!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Passwords do not match!';
        message.style.color = 'red';
    }
}

// Add event listeners
password1.addEventListener('input', checkPasswords);
password2.addEventListener('input', checkPasswords);