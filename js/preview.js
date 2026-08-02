let previewElement = null;

export function initPreview(element) {
    previewElement = element;
}

export function updatePreview(r, g, b) {
    if (!previewElement) return;

    previewElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    previewElement.style.boxShadow = `
        0 0 25px rgba(${r}, ${g}, ${b}, 0.45),
        0 0 60px rgba(${r}, ${g}, ${b}, 0.2)
    `;
}

export function clearPreview() {
    if (!previewElement) return;

    previewElement.style.backgroundColor = "transparent";
    previewElement.style.boxShadow = "none";
}
