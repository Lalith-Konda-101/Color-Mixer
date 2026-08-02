let outputs = {};

export function initUI(elements) {
    outputs = elements;
}

export function updateOutputs(color) {
    outputs.hex.textContent = color.hex;

    outputs.rgb.textContent =
        `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;

    outputs.decimal.textContent = color.decimal;
}

export function clearOutputs() {
    outputs.hex.textContent = "-";
    outputs.rgb.textContent = "-";
    outputs.decimal.textContent = "-";
}

export function showError(message) {
    outputs.hex.textContent = message;
    outputs.rgb.textContent = "-";
    outputs.decimal.textContent = "-";
}
