var input_1 = document.getElementById("num1");
var input_2 = document.getElementById("num2");
var button = document.querySelector("button");
function add(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(add(+input_1.value, +input_2.value));
});
