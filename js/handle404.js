// We have our own 404 page, so we want htmx to swap it in when seen.
document.body.addEventListener('htmx:beforeSwap', e => {
    if (e.detail.xhr.status === 404) {
        e.detail.shouldSwap = true;
        e.detail.isError = false;
    }
});
