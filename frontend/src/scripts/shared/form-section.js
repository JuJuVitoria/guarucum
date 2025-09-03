import { showError, removeError, validationEmail, validationNome, validationTextMsg } from "./form-validation.js";

let currentSectionIndex = 1;

function nextFormSection(formId) {
    const form = document.getElementById(formId);
    const formSections = form.querySelectorAll('.form-section');

    const isSectionValid = validateCurrentSection(formSections, currentSectionIndex);
    if (isSectionValid) {
        showFormSection(++currentSectionIndex, formSections);
    }
}

function previousFormSection(formId) {
    const form = document.getElementById(formId);
    const formSections = form.querySelectorAll('.form-section');
    showFormSection(--currentSectionIndex, formSections);
}

function validateCurrentSection(sections, sectionId) {
    const currentSection = Array.from(sections).find(
        section => section.dataset.section == sectionId
    );

    let isSectionValid = true;

    const nomeInput = currentSection.querySelector('#f-nome');
    const emailInput = currentSection.querySelector('#f-email');
    const msgInput = currentSection.querySelector('#f-mensagem');

    if (nomeInput) {
        if (!nomeInput.value.trim()) {
            showError(nomeInput, 'Campo obrigatório');
            isSectionValid = false;
        } else if (!validationNome(nomeInput.value)) {
            showError(nomeInput, 'Digite o nome completo (nome e sobrenome)');
            isSectionValid = false;
        } else {
            removeError(nomeInput);
        }
    }

    if (emailInput) {
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Campo obrigatório');
            isSectionValid = false;
        } else if (!validationEmail(emailInput.value)) {
            showError(emailInput, 'Digite um e-mail válido');
            isSectionValid = false;
        } else {
            removeError(emailInput);
        }
    }

    if (msgInput) {
        if (!msgInput.value.trim()) {
            showError(msgInput, 'Campo obrigatório');
            isSectionValid = false;
        } else if (!validationTextMsg(msgInput.value)) {
            showError(msgInput, 'A mensagem deve ter entre 30 e 500 caracteres.');
            isSectionValid = false;
        } else {
            removeError(msgInput);
        }
    }

    if (!isSectionValid) {
        alert('Por favor, preencha os campos obrigatórios corretamente antes de prosseguir!');
    }

    return isSectionValid;
}

function showFormSection(index, sections) {
    if (sections.length === 0) return;

    if (index > sections.length) {
        currentSectionIndex = 1;
    }
    if (index < 1) {
        currentSectionIndex = sections.length;
    }

    sections.forEach(section => {
        section.classList.remove('active');
    });

    sections[currentSectionIndex - 1].classList.add('active');
}

window.nextFormSection = nextFormSection;
window.previousFormSection = previousFormSection;