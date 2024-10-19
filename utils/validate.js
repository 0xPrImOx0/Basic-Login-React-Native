const EmailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;

const EmailChecker = (value) => {
    if (!EmailRegex.test(value)) {
        return 'Please input valid email address';
    }
    return;
}

export { EmailChecker };