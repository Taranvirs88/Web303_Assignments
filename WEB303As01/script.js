/*
	WEB 303 Assignment 1 - jQuery
	{Taranvir Singh Atwal
	Student Id:W0814075
	Date Created:2023-01-25}
*/
$(document).ready(function() {
//Function for Input type using id  #yearly-salary

$('#yearly-salary').on('change',function(){
	let $salary =$('#yearly-salary').val();
	console.log($salary); //Declare a new variable and store into $salary and show using console.log method.

// Function for Input type using  id percent
// created a new variable $ percent and store into $ percent variable.
$('#percent').on('change',function(){
	let $percent =$('#percent').val();
	console.log($percent);

	let totalSpending = ($salary*$percent/100).toFixed(2);
	console.log(totalSpending);
	$('#amount').text('$' + totalSpending);

});
});
});