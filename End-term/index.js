let numbers = [];

document.querySelector("button").addEventListener("click", () => {

    let num = Number(document.getElementById("num").value);

    numbers.push(num);

    document.getElementById("num").value = "";

    if (numbers.length == 5) {

        let largest = Math.max(...numbers);

        document.getElementById("result").innerHTML =
            "<h2>Largest Number = " + largest + "</h2>";

        numbers = [];
    }
});