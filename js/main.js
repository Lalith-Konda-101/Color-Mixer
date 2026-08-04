import { detectFormat } from "./parser.js";
import { validateColor } from "./validator.js";
import { updatePreview, clearPreview } from "./preview.js";
import { updateOutputs, clearOutputs, showError } from "./ui.js";

import {
    hexToRgb,
    decimalToRgb,
    rgbToHex,
    rgbToDecimal
} from "./converter.js";

const inputField = document.getElementById("color-input");
const inputType = document.getElementById("input-type");

function initialize() {
    inputField.addEventListener("input", handleInput);

    console.log("✅ Color Mixer initialized.");
}

function handleInput() {

    const value = inputField.value.trim();

    const parsed = detectFormat(value);

    if (!parsed.valid) {
        clearOutputs();
        clearPreview();
        return;
    }

    if (!validateColor(parsed.type, parsed.value)) {
        showError("Invalid Color");
        clearPreview();
        return;
    }

    let rgb;

    switch (parsed.type) {

        case "hex":
            rgb = hexToRgb(parsed.value);
            break;

        case "decimal":
            rgb = decimalToRgb(parsed.value);
            break;

        case "rgb":

            const numbers = parsed.value
                .replace(/rgb|\(|\)|\s/g, "")
                .split(",")
                .map(Number);

            rgb = {
                r: numbers[0],
                g: numbers[1],
                b: numbers[2]
            };

            break;
    }

    updatePreview(rgb.r, rgb.g, rgb.b);

    updateOutputs({
        hex: rgbToHex(rgb.r, rgb.g, rgb.b),
        rgb,
        decimal: rgbToDecimal(rgb.r, rgb.g, rgb.b)
    });

}
