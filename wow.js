Here's a way you can do this using vanilla JS.

Here's JSFiddle since StackOverflow doesn't allow localStorage to be executed on the website as a security feature.

How it works:

Using window.onload = function() {...}, check if 'content' key exists in localStorage
If it does, load the data into <div class="content">
Upon pressing Edit button, contentEditable is toggled
Here you can use any method to save the data. I used content.contentEditable === 'false' to save the innerHTML data to 'content' key.
To Note: localStorage is saved in your browser locally, use databases or anything similar to display edits to all viewers.

// Load content onload if it exists in localStorage
window.onload = function() {
	if(localStorage.getItem('content')) {
		document.querySelector('.content').innerHTML = localStorage.getItem('content');
  }
}

let editBtn = document.querySelector('#edit_content');
let content = document.querySelector('.content');

editBtn.addEventListener('click', () => {
  // Toggle contentEditable on button click
	content.contentEditable = !content.isContentEditable;
  
  // If disabled, save text
  if(content.contentEditable === 'false') {
  	localStorage.setItem('content', content.innerHTML);
  }
});
