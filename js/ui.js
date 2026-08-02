// =========================
// Output Elements
// =========================

const hexOutput = document.getElementById("hex-output");
const rgbOutput = document.getElementById("rgb-output");
const decimalOutput = document.getElementById("decimal-output");

// =========================
// Update Outputs
// =========================

export function updateOutputs(color) {

    hexOutput.textContent = color.hex;

    rgbOutput.textContent =
        `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;

    decimalOutput.textContent = color.decimal;
}

// =========================
// Reset Outputs
// =========================

export function clearOutputs() {

    hexOutput.textContent = "-";
    rgbOutput.textContent = "-";
    decimalOutput.textContent = "-";
}

// =========================
// Show Error
// =========================

export function showError(message) {

    hexOutput.textContent = message;
    rgbOutput.textContent = "-";
    decimalOutput.textContent = "-";
}
