$(document).ready(onReady);
// console.log('js works!!!');
let salaries =[];
function onReady(){
    // console.log('jquery is working!!!');
    $('#submitButton').on('click', addEmployeeInfo)
}


//this function will be used to submit new employees info to the table. 
function addEmployeeInfo(event) {
    event.preventDefault();
// storing employee data from input using .val. 
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let idTextInput = $('#idTextInput').val();
    let titleInput = $('#titleInput').val();
    let annualSalary = parseFloat($('#annualSalaryInput').val());// using parseFloat to conver the input values to a decimal number. 

    // console.log('add employee button works');
    // console.log(tableRow)

// using .append to add new employee data to our table. 
// from our stored data above we can use string interpolation to add input values. 
    let tableRow = `<tr> <td>${firstName}</td><td>${lastName}</td><td>${idTextInput}</td><td>${titleInput}</td><td>${annualSalary}</td></tr></tbody>`
    // console.log(tableRow)
    $('#insertionPoint').append(tableRow);

    $('.remove').last().on('click' deleteEmployees);

    updateTotalMonthly();
    
    // Clear the input fields after adding an employee
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idTextInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');

}



// X- A 'Submit' button should collect the form information------DONE
// X -store the information append information to the DOM -------DONE
// calculate monthly TOTAL, -------------------------------------TODO

// clear the input fields. ---------------------------------------TODO
// Using the stored information, calculate monthly costs ---------TODO
// append this to the to DOM. ------------------------------------TODO

// If the total monthly cost exceeds $20,000, 
// add a red background color to the total monthly cost.-----------TODO

// X- Create a delete button that removes an employee from the DOM.---TODO
// For Base mode, it does **not** need to remove that Employee's salary 
//from the reported total.-----------------------------------------TODO
