import { detectFormat } from "./parser.js";

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
