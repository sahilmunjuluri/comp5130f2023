const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const urlPattern = /^(http|https):\/\/[a-zA-Z0-9-._]+(\.[a-zA-Z0-9-]+)+([/?].*)?$/;

function isValidEmail(email) {
    return emailPattern.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    return phonePattern.test(phoneNumber);
}

function isValidURL(url) {
    return urlPattern.test(url);
}

// Test the functions with two examples for each category
const examples = [
    "example@email.com",
    "another@example.co",
    "(123) 456-7890",
    "555-5555",
    "http://www.example.com",
    "https://www.example.org",
];

for (const example of examples) {
    if (isValidEmail(example)) {
        console.log(`Email: "${example}" is a valid email address.`);
    } else {
        console.log(`Email: "${example}" is not a valid email address.`);
    }

    if (isValidPhoneNumber(example)) {
        console.log(`Phone Number: "${example}" is a valid phone number.`);
    } else {
        console.log(`Phone Number: "${example}" is not a valid phone number.`);
    }

    if (isValidURL(example)) {
        console.log(`URL: "${example}" is a valid URL.`);
    } else {
        console.log(`URL: "${example}" is not a valid URL.`);
    }
}

