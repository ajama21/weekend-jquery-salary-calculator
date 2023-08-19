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
    console.log(tableRow)

    $('#insertionPoint').append(tableRow);


}

