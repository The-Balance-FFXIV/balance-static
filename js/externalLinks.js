// Don't boost links to external websites
document.body.addEventListener('htmx:configRequest', e => {
    const url = new URL(e.detail.path, window.location.origin);
    if (url.origin !== window.location.origin && e.detail.boosted) {
        // Stop HTMX from processing the event.
        e.preventDefault();   // prevent the htmx request
        // Perform normal browser navigation instead.
        window.location.href = e.detail.path;  // fallback to full navigation
    }
});
