import { validationNome, validationEmail, validationTextMsg, showError, removeError } from './form-validation.js';

function sendResponse(event) {
    event.preventDefault();

    const form = document.getElementById('form-contato');
    let valid = true;

    const nomeInput = form.querySelector('#f-nome');
    removeError(nomeInput);
    if (!nomeInput.value.trim()) {
        showError(nomeInput, 'Campo obrigatório');
        valid = false;
    } else if (!validationNome(nomeInput.value)) {
        showError(nomeInput, 'Digite o nome completo (nome e sobrenome)');
        valid = false;
    }

    const emailInput = form.querySelector('#f-email');
    removeError(emailInput);
    if (!emailInput.value.trim()) {
        showError(emailInput, 'Campo obrigatório');
        valid = false;
    } else if (!validationEmail(emailInput.value)) {
        showError(emailInput, 'Digite um e-mail válido');
        valid = false;
    }

    const msgInput = form.querySelector('#f-mensagem');
    removeError(msgInput);
    if (!msgInput.value.trim()) {
        showError(msgInput, 'Campo obrigatório');
        valid = false;
    } else if (!validationTextMsg(msgInput.value)) {
        showError(msgInput, 'A mensagem deve ter entre 30 e 500 caracteres.');
        valid = false;
    }

    if (!valid) {
        alert('Por favor, preencha os campos obrigatórios corretamente antes de enviar!');
        return false;
    }

    alert('Mensagem enviada com sucesso!');
    form.reset();
    return true;
}

window.sendResponse = sendResponse;