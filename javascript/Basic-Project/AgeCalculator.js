
function calculateAge(currentYear, birthYear) {
    if (currentYear < birthYear) {
        return "Current year cannot be less than birth year.";
    }
    return currentYear - birthYear;
}

// Example usage:
const currentYear = 2024;
const birthYear = 1990;
const age = calculateAge(currentYear, birthYear);
console.log(`The age of the person is: ${age}`);

