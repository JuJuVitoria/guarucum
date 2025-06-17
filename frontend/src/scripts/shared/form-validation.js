export function validationEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validationNome(nome) {
    return nome.trim().split(/\s+/).length >= 2;
}

export function validationTextMsg(txt) {
    const length = txt.trim().length;
    return length >= 30 && length <= 500;
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
}

export function removeError(element) {
    element.classList.remove('error');
    let errorMsg = element.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains('error-message')) {
        errorMsg.remove();
    }
}