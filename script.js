$(document).ready(onReady);
// console.log('js works!!!');

function onReady(){
    $('#submitButton').on('click', addEmployeeInfo)

 
}

function addEmployeeInfo(event){
    event.preventDefault();
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let idTextInput = $('#idTextInput').val();
    let titleInput = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();
    let submisionButton = $('#submitButton').val();
    // console.log('add employee button works');
    // console.log(tableRow)
    let tableRow = `<tr> <td>${firstName}</td><td>${lastName}</td><td>${idTextInput}</td><td>${titleInput}</td><td>${annualSalary}</td></tr></tbody>`
    // console.log(tableRow)
    $('#insertionPoint').append(tableRow);
}



// X- A 'Submit' button should collect the form information------DONE
// X -store the information append information to the DOM -------DONE
// calculate monthly costs, -------------------------------------TODO

// clear the input fields. ---------------------------------------TODO
// Using the stored information, calculate monthly costs ---------TODO
// append this to the to DOM. ------------------------------------TODO

// If the total monthly cost exceeds $20,000, 
// add a red background color to the total monthly cost.-----------TODO

// Create a delete button that removes an employee from the DOM.---TODO
// For Base mode, it does **not** need to remove that Employee's salary 
//from the reported total.-----------------------------------------TODO