function showModal(tipo) {
    const modal = document.querySelector(`[data-modal="${tipo}"]`);
    modal.classList.add('modal-active');
    modal.classList.remove('modal-disable');
    document.querySelector('.site-content').classList.add('blur');
    document.body.classList.add('body-modal-open'); // Desativa o scroll
}

function closeModal(tipo) {
    const modal = document.querySelector(`[data-modal="${tipo}"]`);
    modal.classList.add('modal-disable');
    modal.classList.remove('modal-active');
    document.querySelector('.site-content').classList.remove('blur');
    document.body.classList.remove('body-modal-open'); // Reativa o scroll
}