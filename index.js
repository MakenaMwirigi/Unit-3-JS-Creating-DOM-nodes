// Write your code here!
// 1. Remove the main element
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// 2. Create new <h1> and assign to newHeader
const newHeader = document.createElement('h1');

// 3. Set id to 'victory'
newHeader.id = 'victory';

// 4. Set the text content
newHeader.innerHTML = 'Ms. Mwirigi is the champion'; 

// 5. Append it to the body
document.body.appendChild(newHeader);