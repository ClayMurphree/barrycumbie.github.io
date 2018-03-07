// my js file

$(document).ready(function() {

//create a loop to "print out" all elements in the DOM"
//1. create the loop structure. How to figure out the LENGTH, i.e., the number of iterations of my loop
//2. hoow do i access an element from my page... then ALL elements?
//3. how do i want to print them out? start on the console

var allDOMElements = document.getElementsByTagName("*"); // heres a start... what does this do>

for ( i=0; i < allDOMElements.length; i++) {
	console.log(allDOMElements[i].innerHTML);
}


});
