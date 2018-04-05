var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Łukasz';
// var indexOfNewName = allNames.indexOf(newName);
// console.log(indexOfNewName);


if (allNames.indexOf(newName) === -1) {
	var newNameAdded = allNames.push(newName);
}
else {
	console.log('This name is already here!');
}

console.log(allNames);



/* ALTERNATYWNE ROZWIĄZANIE */

//  	if (allNames.indexOf(newName) === -1) {
//   		allNames.splice(0, 0, newName);		
//   	}
//   	else {	  		
//   		console.log('This name is already here!');			
//   	 }

// console.log(allNames);





