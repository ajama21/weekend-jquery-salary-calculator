$(document).ready(onReady);

let salaries = []; // global array to store all salary data.

function onReady() {
    // console.log('jQuery works');
    $('#submitButton').on('click', addEmployeeInfo);
}

function addEmployeeInfo(event) {
    event.preventDefault();//Prevent form search button from reloading entire DOM.
    // console.log('add employee function is working');
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let idTextInput = $('#idTextInput').val();
    let titleInput = $('#titleInput').val();
    let annualSalary = parseFloat($('#annualSalaryInput').val());

    let monthlySalary = annualSalary / 12;
    salaries.push(monthlySalary); // Store monthly salary in the array

    let tableRow = `<tr><td>${firstName}</td><td>${lastName}</td><td>${idTextInput}</td><td>${titleInput}</td><td>${annualSalary}</td><td><button class="remove">Delete</button></td></tr>`;
    $('#insertionPoint').append(tableRow);

    $('.remove').last().on('click', deleteEmployee);

    updateTotalMonthly();
    
    // Clear the input fields after adding an employee
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idTextInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
}

function updateTotalMonthly() {
    // console.log('update function is working');
    let totalMonthly = 0;

    // Calculate the total monthly salary using a for...of loop
    for (let salary of salaries) {
        totalMonthly += salary;
    }

    $('#totalMonthlyCost').text(totalMonthly.toFixed(2));

    if (totalMonthly > 20000) {
        $('#totalMonthlyCost').addClass('high-total');
    } else {
        $('#totalMonthlyCost').removeClass('high-total'); // Use removeClass to clear the class
    }
}


function deleteEmployee() {
    // console.log('delete employee function is working');
    let deletedSalary = parseFloat($(this).closest('tr').find('td').eq(4).text());
    $(this).closest('tr').remove();

    let index = salaries.indexOf(deletedSalary);
    if (index !== -1) {
        salaries.splice(index, 1);
    }

    updateTotalMonthly();

    // console.log('delete employees works');
}



// X - A 'Submit' button should collect the form information------DONE
// X - store the information append information to the DOM -------DONE
// X - calculate monthly TOTAL, ----------------------------------DONE

// X - clear the input fields. -----------------------------------DONE
// X - Using the stored information, calculate monthly costs------DONE
// X - Append this to the to DOM. --------------------------------DONE

// X - If the total monthly cost exceeds $20,000, 
// X - add a red background color to the total monthly cost.------DONE

// X- Create a delete button that removes an employee from the DOM.---DONE