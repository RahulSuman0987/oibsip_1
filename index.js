// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function calculate(calc) {

    /* Check if function include ! character then
    calculate factorial of number */
    if (document.getElementById("result").value.includes("!")) {

        size = document.getElementById("result").value.length;
        n = Number(document.getElementById("result").value.substring(0, size - 1));
        f = 1;

        for (i = 2; i <= n; i++)
            f = f * i;
        document.getElementById("result").value = f;
    }

    /* If function include % character then calculate
    the % of number */
    else if (document.getElementById("result").value.includes("%")) {

        size = document.getElementById("result").value.length;
        n = Number(document.getElementById("result").value.substring(0, size - 1));
        document.getElementById("result").value = n / 100;
    } else
    /* Otherwise evaluate and execute output */
        document.getElementById("result").value = eval(document.getElementById("result").value);
}