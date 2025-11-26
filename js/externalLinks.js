// Don't preload nor boost links to external websites, e.g. the discord link in the header.
document.body.addEventListener('htmx:configRequest', e => {
    const url = new URL(e.detail.path, window.location.origin);
    if (url.origin !== window.location.origin) {
        // Stop HTMX from processing the event.
        e.preventDefault();   // prevent the htmx request
        if (e.detail.boosted) {
            // Perform normal browser navigation instead.
            window.location.href = e.detail.path;  // fallback to full navigation
        }
    }
});
