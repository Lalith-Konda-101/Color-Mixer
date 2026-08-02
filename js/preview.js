// =========================
// Preview Element
// =========================

const preview = document.getElementById("color-preview");

// =========================
// Update Preview
// =========================

export function updatePreview(r, g, b) {

    const color = `rgb(${r}, ${g}, ${b})`;

    preview.style.backgroundColor = color;

    preview.style.boxShadow = `
        0 0 25px rgba(${r}, ${g}, ${b}, 0.45),
        0 0 60px rgba(${r}, ${g}, ${b}, 0.2)
    `;
}

// =========================
// Reset Preview
// =========================

export function clearPreview() {

    preview.style.backgroundColor = "transparent";
    preview.style.boxShadow = "none";
}
