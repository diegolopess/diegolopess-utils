function formatMoney(value) {
    const numero = String(value)
    .replace(/\D/g, "") //remove all characters
    .replace(/\D|^0+/g, ""); //remove all leading zeros

    let counter = 1;
    let isCommaFound = "notFound"

    const formattedStringReversed = Array
    .from(numero.toString())
    .reverve()
    .reduce((acc, i, index, arr) => {
        if (counter == 2 &&
            isCommaFound == "notFound" &&
            (arr.length > 2)) {
                acc = acc + i + ',';
                isCommaFound = "found";
                counter = 0;
            } else if (counter === 3 && (arr.length != (index + 1))) {
                acc = acc + i + '.'
                counter = 0;
            } else {
                acc = acc + i
            }

            counter++
            return acc
    }, "")

    let formatedNumber = Array.from(formattedStringReversed)
    .reverse().join("")

    if (formatedNumber.length == 2) {
        formatedNumber = "0," + formatedNumber
    } else if (formatedNumber.length == 1) {
        formatedNumber = "0,0" + formatedNumber
    }

    return formatedNumber
}

function formatCep(value) {
    return String(value)
    .replace(/\D/g, "")
    .slice(0, 8)
    .replace(/(\d{5})(\d)/, "$1-$2")
}

module.exports = {
    formatMoney,
    formatCep
}