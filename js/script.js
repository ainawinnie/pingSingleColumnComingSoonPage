const email = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');

email.addEventListener('blur', emailValidation);

function emailValidation (e) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    errorMsg.classList.remove('hide');
    email.classList.add('email-error-highlight')
    console.log('Aqui');
    return false;
    } else {
        errorMsg.classList.add('hide');
        email.classList.remove('email-error-highlight');
    }

}