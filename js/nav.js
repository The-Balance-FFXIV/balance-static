for (const chevron of document.querySelectorAll(".chevron")) {
    let siblingList = chevron.nextElementSibling;
    chevron.addEventListener('click', () => {
        chevron.parentNode.classList.toggle('nav-active');
        siblingList.classList.toggle('hidden')
    });
}

