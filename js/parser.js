export function detectFormat(input) {

    if (input.length === 0) {
        return {
            valid: false,
            type: "empty",
            value: input
        };
    }

    // HEX (#FFFFFF or FFFFFF)
    if (/^#?[0-9A-Fa-f]{6}$/.test(input)) {
        return {
            valid: true,
            type: "hex",
            value: input.startsWith("#") ? input : "#" + input
        };
    }

    // RGB (255,0,0)
    if (/^\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}$/.test(input)) {
        return {
            valid: true,
            type: "rgb",
            value: input
        };
    }

    // rgb(255,0,0)
    if (/^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/i.test(input)) {
        return {
            valid: true,
            type: "rgb",
            value: input
        };
    }

    // Decimal
    if (/^\d+$/.test(input)) {
        return {
            valid: true,
            type: "decimal",
            value: input
        };
    }

    return {
        valid: false,
        type: "unknown",
        value: input
    };
}
