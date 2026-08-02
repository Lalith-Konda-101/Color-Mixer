export function validateColor(type, value) {

    switch (type) {

        case "hex":
            return /^#?[0-9A-Fa-f]{6}$/.test(value);

        case "rgb": {
            const numbers = value
                .replace(/rgb|\(|\)|\s/g, "")
                .split(",")
                .map(Number);

            return (
                numbers.length === 3 &&
                numbers.every(n => Number.isInteger(n) && n >= 0 && n <= 255)
            );
        }

        case "decimal": {
            const number = Number(value);

            return (
                Number.isInteger(number) &&
                number >= 0 &&
                number <= 16777215
            );
        }

        default:
            return false;
    }
}
