export function validationEmail(email) {
    return email.includes('@') && email.includes('.');
}

export function showError(element, msg) {
    element.classList.add('error');
    let errorMsg = element.nextElementSibling;

    if (!errorMsg || !errorMsg.classList.contains('error-message')) {
        errorMsg = document.createElement('small');
        errorMsg.classList.add('error-message');
        element.parentNode.insertBefore(errorMsg, element.nextSibling);
    }

    errorMsg.textContent = msg;
    errorMsg.style.color = '#9e1a1a';
}

export function removeError(element) {
    element.classList.remove('error');
    let errorMsg = element.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains('error-message')) {
        errorMsg.remove();
    }
}