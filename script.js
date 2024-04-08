document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const length = document.getElementById('length').value;
    const password = generatePassword(length);
    document.getElementById('password-output').textContent = password;
});

function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
