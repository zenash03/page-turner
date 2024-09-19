const registerForm = document.getElementById('register-form');

function validationForm(form) {
    let data = new FormData(form);
    const 
        username = data.get('username'),
        email = data.get('email'),
        dob = data.get('dob'),
        password = data.get('password'),
        confPassword = data.get('confPassword');

    const usernameErr = document.getElementById('usernameErr');
    const emailErr = document.getElementById('emailErr');
    const dobErr = document.getElementById('dobErr');
    const passwordErr = document.getElementById('passwordErr');
    const confPasswordErr = document.getElementById('confPasswordErr');

    resetMessage(usernameErr, emailErr, dobErr, passwordErr, confPasswordErr);

    const todayDate = new Date();
    const dobDate = new Date(dob);

    if (username.length == "") {
        showMessage(usernameErr, 'username not be empty!');
    }
    if (email.length == "") {
        showMessage(emailErr, "email not be empty!");
    }
    if (dob == "") {
        showMessage(dobErr, "DOB not be empty!");
    }
    else if (dobDate > todayDate) {
        showMessage(dobErr, "DOB cannot be greater than today!")
    }
    if (password.length == "") {
        showMessage(passwordErr, "password not be empty!");
    }
    if (confPassword.length == "") {
        showMessage(confPasswordErr, "confirm password no be empty!");
    }
}


function showMessage(comp, message) {
    comp.innerHTML = `* ${message}`;
}
function resetMessage(...comp) {
    comp.forEach(c => {
        c.innerHTML = '';
    });
}

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    validationForm(this);
})