function magicDates([...arg]) {

    let [firstYear, secondYear, numberToSearchFor] = [...arg.map(Number)]
    let date = new Date(firstYear, 0, 1)
    let found = false
    while (date.getFullYear() <= secondYear) {

        let d1 = Math.floor(date.getDate() / 10); // First day digit
        let d2 = date.getDate() % 10; // Second day digit
        let d3 = Math.floor((date.getMonth() + 1) / 10); // First month digit
        let d4 = (date.getMonth() + 1) % 10; // Second month digit
        let d5 = Math.floor(date.getFullYear() / 1000); // First year digit
        let d6 = Math.floor(date.getFullYear() / 100) % 10; // Second year digit
        let d7 = Math.floor(date.getFullYear() / 10) % 10; // Third year digit
        let d8 = date.getFullYear() % 10; // Fourth year digit

        let weight = d1 * (d2 + d3 + d4 + d5 + d6 + d7 + d8) +
            d2 * (d3 + d4 + d5 + d6 + d7 + d8) +
            d3 * (d4 + d5 + d6 + d7 + d8) +
            d4 * (d5 + d6 + d7 + d8) +
            d5 * (d6 + d7 + d8) +
            d6 * (d7 + d8) +
            d7 * d8;

        if (weight == numberToSearchFor) {
            console.log("" + d1 + d2 + "-" + d3 + d4 + "-" + d5 + d6 + d7 + d8);
            found = true;
        }
        date.setDate(date.getDate() + 1);
    }
    if (!found) {
        console.log("No");
    }
}

// magicDates([2012, 2014, 80])
// magicDates([2003, 2004, 1500])