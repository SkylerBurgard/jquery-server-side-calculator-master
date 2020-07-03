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
  operation = $('#js-btn-add');
}

function clickSubtract() {
  operation = $('#js-btn-subtract');
}

function clickMultiply() {
  operation = $('#js-btn-multiply');
}

function clickDivide() {
  operation = $('#js-btn-divide');
}

function clickEquals() {
  //   operation = $('#js-btn-equals');
  console.log('Equaled');

  // WRONG - operation = "Equals";

  const dataForServer = {
    num1: $('#input-field-1').val(),
    num2: $('#input-field-2').val(),
    operation: operation,
  };
  console.log(dataForServer);
  postEquation(dataForServer);
}

function clickClear() {
  operation = $('#js-btn-clear');
}

function postEquation(dataForServer) {
  $.ajax({
    type: 'POST',
    url: '/math',
    data: dataForServer,
  })
    .then((response) => {
      console.log(response);
      getEquations();
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
