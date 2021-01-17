function notifications([...arg]) {
    arg.shift()
    processMessage(arg)

    function processMessage(info) {
        while (info.length !== 0) {

            let operation = info.shift()

            if (operation === 'success') {
                console.log(showSuccessMessage(info.shift(), info.shift()))
            } else if (operation === 'warning') {
                console.log(showWarningMessage(info.shift()))
            } else { //error
                console.log(showErrorMessage(info.shift(), info.shift(), info.shift()))
            }
        }
    }

    function showSuccessMessage(operation, message) {
        return `Successfully executed ${operation}.\n${'='.repeat(operation.length + 23)}\n${message}.\n`
    }

    function showWarningMessage(message) {
        return `Warning: ${message}.\n${'='.repeat(message.length + 10)}\n`
    }

    function showErrorMessage(operation, message, errorCode) {
        return `Error: Failed to execute ${operation}.\n${'='.repeat(operation.length +26)}\nReason: ${message}.\nError code: ${errorCode}.\n`
    }
}


// notifications([
//     '4',
//     'error',
//     'credit card purchase',
//     'Invalid customer address',
//     '500',
//     'warning',
//     'Email not confirmed',
//     'success',
//     'user registration',
//     'User registered successfully',
//     'warning',
//     'Customer has not email assigned',

// ])