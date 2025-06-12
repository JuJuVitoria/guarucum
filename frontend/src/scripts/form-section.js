import { showError, removeError } from "./form-validation.js";

let indexSection = 1;

function proxSectionForm(idForm) {
    const form = document.getElementById(idForm);
    const formSections = form.querySelectorAll('.form-section');

    let allFilled = verifica(formSections, indexSection);
    if (allFilled == true) {
        mostraSectionForm(indexSection += 1, formSections);
    }
}

function anteSectionForm(idForm) {
    const form = document.getElementById(idForm);
    const formSections = form.querySelectorAll('.form-section');
    mostraSectionForm(indexSection -= 1, formSections);
}

function verifica(sections, id) {
    const currentSection = Array.from(sections).find(
        section => section.dataset.section == id
    );
    let allFilled = true;


    const inputs = currentSection.querySelectorAll('[required]');

    inputs.forEach(input => {
        if (!input.value.trim()) {
            showError(input, 'Campo obrigatório');
            allFilled = false;
        } else {
            removeError(input);
        }
    });

    if (allFilled == true) {
        return allFilled;
    } else {
        alert('Por favor, preencha os campos obrigatórios, antes de prossegir!')
        return allFilled;
    }
}

function mostraSectionForm(index, sections) {
    if (sections.length === 0) return;

    if (index > sections.length) {
        indexSection = 1;
    }
    if (index < 1) {
        indexSection = sections.length
    }

    sections.forEach(section => {
        section.classList.remove('active');
    });

    sections[indexSection - 1].classList.add('active');
}

window.proxSectionForm = proxSectionForm;
window.anteSectionForm = anteSectionForm;