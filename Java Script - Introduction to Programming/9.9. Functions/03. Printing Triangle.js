function printingTriangle(n) {

    function print(start, end) {
        let result = ''
        for (let i = start; i <= end; i++) {
            result += i + " "
        }
        return result
    }

    for (let i = 1; i <= n; i++) {
        console.log(print(1, i))
    }

    for (let i = n - 1; i > 0; i--) {
        console.log(print(1, i))
    }
}


// printingTriangle(3)