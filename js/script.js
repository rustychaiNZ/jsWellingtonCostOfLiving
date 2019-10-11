// Asks for Everyone's weekly budget for food
var person1Food = parseInt(prompt('Person1: How much do you spend on food?'));
var person2Food = parseInt(prompt('Person2: How much do you soend on food?'));
var person3Food = parseInt(prompt('Person3: How much do you spend on food?'));

// Asks for everyone's weekly budget on transport
var person1Transport = parseInt(prompt('Person1: How much do you spend on transport?'));
var person2Transport = parseInt(prompt('Person2: How much do you spend on transport?'));
var person3Transport = parseInt(prompt('Person3: How much do you spend on transport?'));

// Asks for how much everyone spends on bills a week
var person1Bills = parseInt(prompt('Person1: How much do you spend on bills?'));
var person2Bills = parseInt(prompt('Person2: How much do you spend on bills?'));
var person3Bills = parseInt(prompt('Person3: How much do you spend on bills?'));

// Works out the total expenses that everyone has
var personTotal1Expense = ('Person 1 Spends in total ' , (person1Food + person1Transport + person1Bills));
var personTotal2Expense = ('Person 2 Spends in total ' , (person2Food + person2Transport + person2Bills));
var personTotal3Expense = ('Person 3 Spends in total ' , (person3Food + person3Transport + person3Bills));

// Displays the total expenses
document.getElementById('person1Total').innerHTML = 'Person1\'s total expense= ' + personTotal1Expense;
document.getElementById('person2Total').innerHTML = 'Person2\'s total expense= ' + personTotal2Expense;
document.getElementById('person3Total').innerHTML = 'Person3\'s total expense= ' + personTotal3Expense;

// Compares the total expeses to find out who pays the most
if (personTotal1Expense > personTotal2Expense) {
	if (personTotal1Expense > personTotal3Expense) {
		document.getElementById('personWhoSpendsMost').innerHTML = 'Person1 Spends the most';
	}
} 
else if (personTotal1Expense > personTotal3Expense) {
	if (personTotal1Expense > personTotal2Expense) {
		document.getElementById('personWhoSpendsMost').innerHTML = 'Person1 Spends the most';
	}
} else if (personTotal2Expense > personTotal3Expense) {
	if (personTotal2Expense > personTotal1Expense) {
	document.getElementById('personWhoSpendsMost').innerHTML = 'Person2 Spends the most';
}
} else if (personTotal3Expense > personTotal1Expense) {
	document.getElementById('personWhoSpendsMost').innerHTML = 'Person3 Spends the most';
} else if (personTotal3Expense > personTotal2Expense) {
	document.getElementById('personWhoSpendsMost').innerHTML = 'Person3 Spends the most';
}

// Compares the total expenses to find out who pays the least
if (personTotal1Expense < personTotal2Expense) {
	document.getElementById('personWhoSpendsLeast').innerHTML = 'Person1 Spends the Least';
} else if (personTotal2Expense < personTotal3Expense) {
	document.getElementById('personWhoSpendsLeast').innerHTML = 'Person2 Spends the Least';
} else{
	document.getElementById('personWhoSpendsLeast').innerHTML = 'Person3 Spends the Least';
}

// Average Expense in wellington
var averageCostOfLiving = ((personTotal1Expense + personTotal2Expense + personTotal3Expense) / 3);
document.getElementById('averageCostOfLiving').innerHTML = 'The average cost of living in wellington is: ' + (averageCostOfLiving).toFixed(2);