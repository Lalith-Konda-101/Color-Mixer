import { detectFormat } from "./parser.js";
import { initPreview } from "./preview.js";
import { initUI } from "./ui.js";

initPreview(document.getElementById("color-preview"));

initUI({
    hex: document.getElementById("hex-output"),
    rgb: document.getElementById("rgb-output"),
    decimal: document.getElementById("decimal-output")
});

const inputField = document.getElementById("color-input");
const inputType = document.getElementById("input-type");

function initialize() {
    inputField.addEventListener("input", handleInput);

    console.log("✅ Color Mixer initialized.");
}

function handleInput() {
    const value = inputField.value.trim();

    const result = detectFormat(value);

    console.log(result);

    // Later:
    // validate(result);
    // convert(result);
    // updateUI(result);
}

initialize();
