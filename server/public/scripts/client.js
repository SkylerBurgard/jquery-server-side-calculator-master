$(document).ready(init);

let operation;

function init() {
  $('#js-btn-add').on('click', clickAdd);
  $('#js-btn-subtract').on('click', clickSubtract);
  $('#js-btn-multiply').on('click', clickMultiply);
  $('#js-btn-divide').on('click', clickDivide);
  $('#js-btn-equals').on('click', clickEquals);
  $('#js-btn-clear').on('click', clickClear);

  getEquations();
}

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
  //   operation = $('#js-btn-equals');
  console.log('Equaled');

  // WRONG - operation = "Equals";

  const dataForServer = {
    num1: parseInt($('#input-field-1').val()),
    num2: parseInt($('#input-field-2').val()),
    operation: operation,
  };
  console.log(dataForServer);
  postEquation(dataForServer);
}

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
      //   getEquations();
    })

    .catch((err) => {
      console.warn(err);
    });
}

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

  function render(response) {}
}
