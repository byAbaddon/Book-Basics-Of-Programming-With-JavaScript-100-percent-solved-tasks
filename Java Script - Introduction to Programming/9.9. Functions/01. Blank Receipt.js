function blankReceipt() {
    function header() {
        return `CASH RECEIPT\n------------------------------`
    }

    function body() {
        return `Charged to____________________\nReceived by___________________`
    }

    function footer() {
        return `------------------------------\n(c) SoftUni`
    }

    return `${header()}\n${body()}\n${footer()}`
}

// console.log(blankReceipt())