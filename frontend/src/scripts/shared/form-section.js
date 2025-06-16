import { showError, removeError, validationEmail } from "./form-validation.js";

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
    const requiredInputs = currentSection.querySelectorAll('[required]');

    requiredInputs.forEach(input => {
        const isEmailField = input.type === 'email';

        if (!input.value.trim()) {
            showError(input, 'Campo obrigatório');
            isSectionValid = false;
        } else if (isEmailField && !validationEmail(input.value)) {
            showError(input, 'Digite um e-mail válido');
            isSectionValid = false;
        } else {
            removeError(input);
        }
    });

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