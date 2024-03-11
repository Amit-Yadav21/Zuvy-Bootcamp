const ulElement = document.getElementById('ul');
const liOne = document.getElementById('one');

// Create new <li> elements for 2 and 3
const liTwo = document.createElement('li');
liTwo.textContent = '2';

const liThree = document.createElement('li');
liThree.textContent = '3';

// Insert the new <li> elements after the <li> with id="one"
ulElement.insertBefore(liTwo, liOne.nextElementSibling);
ulElement.insertBefore(liThree, liOne.nextElementSibling.nextElementSibling);
