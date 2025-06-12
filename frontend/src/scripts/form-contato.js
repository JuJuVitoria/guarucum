let indexSection = 1;

function proxSectionForm(idForm) {
    const form = document.getElementById(idForm);
    const formSections = form.querySelectorAll('.form-section');
    mostraSectionForm(indexSection += 1, formSections);
}

function anteSectionForm(idForm) {
    const form = document.getElementById(idForm);
    const formSections = form.querySelectorAll('.form-section');
    mostraSectionForm(indexSection -= 1, formSections);
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