$(document).ready(init);

let operation;
let equation = [];
//Defining operation and setting equation (req.body) to empty array.

function init() {
    $('#js-btn-add').on('click', clickAdd);
    $('#js-btn-subtract').on('click', clickSubtract);
    $('#js-btn-multiply').on('click', clickMultiply);
    $('#js-btn-divide').on('click', clickDivide);
    $('#js-btn-equals').on('click', clickEquals);
    $('#js-btn-clear').on('click', clickClear);

    getEquations();
}
//init function that has our click events for each type of operation.

function clickAdd() {
    operation = 'add';
    //   $('#js-btn-add').val();
    console.log(operation);
}

function clickSubtract() {
    operation = 'subtract';
}

function clickMultiply() {
    operation = 'multiply';
}

function clickDivide() {
    operation = 'divide';
}

function clickEquals() {
    //   operation = 'equals';
    //   console.log('Equaled');
    //functions for each type of operation (+ - * /)
    const dataForServer = {
        num1: parseInt($('#input-field-1').val()),
        num2: parseInt($('#input-field-2').val()),
        operation: operation,
    };
    console.log(dataForServer);
    postEquation(dataForServer);
}
//turning our numbers from strings to numbers using parseInt

function clickClear() {
    operation = 'clear';
}

function postEquation(dataForServer) {
    $.ajax({
            type: 'POST',
            url: '/math',
            data: dataForServer,
        })
        .then((response) => {
            console.log('POST', response);
            getEquations();
        })

        .catch((err) => {
            console.warn(err);
        });
} //post route to send dataFromServer which is our re.body/ equation

function getEquations() {
    $.ajax({
            type: 'GET',
            url: '/math',
        })
        .then((response) => {
            render(response);
            console.log(response);
        })
        .catch((err) => {
            console.warn(err);
        });
} // GET route to get our response (not positive how to explain it? maybe idk it well enough.)

// function render(answerObject) {
//     console.log(answerObject);
//     $('.js-output').append(
//         `<h2>${answerObject[answerObject.length - 1].answer} </h2>`
//     );
//     $('.js-output').empty();
function render(answerObject) {
    $('#js-output').empty();
    // console.log(answerObject);
    for (let equation of answerObject) {
        $('#js-output').append(`<h4>${equation.answer} </h4>`);

        // $('#js-output').empty(`<h2>${equation.answer} </h2>`);
    }
} // render function the appends and empties our equations




//GET answer from POST(server) to client using get route
//create variable globally