const rootEl = document.documentElement;

const modalButtons = () => document.querySelectorAll("[data-toggle]");

const isCloseButton = (event) => event.target.attributes['aria-label'].value === 'close';

const openModal = modal => event => {
    rootEl.classList.add('is-clipped');
    modal.classList.add('is-active');
}

const closeModal = modal => event => {
    if (isCloseButton(event)) {
        modal.classList.remove('is-active');
        rootEl.classList.remove('is-clipped');
    }
}

const addModalListener = (element) => {
    const target = element.attributes['data-target'].value;
    const modal = document.getElementById(target);

    element.addEventListener('click', openModal(modal));
    modal.addEventListener('click', closeModal(modal));
};

modalButtons().forEach(addModalListener);