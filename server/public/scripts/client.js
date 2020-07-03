$(document).ready(init);

let operation = "";

function init() {
    $("#js-btn-add").on("click", clickAdd);
    $("#js-btn-subtract").on("click", clickSubtract);
    $("#js-btn-multiply").on("click", clickMultiply);
    $("#js-btn-divide").on("click", clickDivide);
    $("#js-btn-equals").on("click", clickEquals);
    $("#js-btn-clear").on("click", clickClear);

    getEquations();
}

function clickAdd() {
    operation = "Add";
}

function clickSubtract() {
    operation = "Subtract";
}

function clickMultiply() {
    operation = "Multiply";
}

function clickDivide() {
    operation = "Divide";
}

function clickEquals() {
    // WRONG - operation = "Equals";

    const dataForServer = {
        num1: $("#js-user-input1").val(),
        num2: $("#js-user-input2").val(),
        operation: operation
    };
    postEquation(dataForServer)
}

function clickClear() {
    operation = "Clear";
}

function postEquation(dataForServer) {
    $.ajax({
            type: "POST",
            url: "/math",
            data: dataForServer,
        })
        .then(response => {
            console.log(response);
            getEquations();
        })

        .catch(err => {
            console.warn(err);
        });
}

function getEquations() {
    $.ajax({
            type: "GET",
            url: "/math",
        })
        .then(response => {
            render(response);
            console.log(response);
        })
        .catch(err => {
            console.warn(err);
        });

    function render(response) {}
}