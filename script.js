$(document).ready(onReady);
// console.log('js works!!!');

function onReady(){
    $('#submitButtonInput').on('click', addEmployeeInfo)

 
}

function addEmployeeInfo(event){
    event.preventDefault();
    console.log('add employee button works');
}