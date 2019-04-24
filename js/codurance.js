const rootEl = document.documentElement;

const modalButtons = () => document.querySelectorAll("[data-toggle]");

const addModalListener = (element) => {
    const target = element.attributes['data-target'].value;
    const modal = document.getElementById(target);

    element.addEventListener('click', (event) => {
        rootEl.classList.add('is-clipped');
        modal.classList.add('is-active');
    });
    
    modal.addEventListener('click', (event) => {
        const ariaLabel = event.target.attributes['aria-label'].value;

        if (ariaLabel === 'close') {
            modal.classList.remove('is-active');
            rootEl.classList.add('is-clipped');
        }          
    });
};

modalButtons().forEach(addModalListener);