function one() {
    console.log("hey");
    two()
}
function two() {
    console.log("hey1");
    three()
}
function three() {
    console.log("hey3");
}
one()
two()
three()
