txtBox = document.querySelector('#inputBox');//assigns a variable to the mentioned element
toDo = document.querySelector('#taskList');//assigns a variable to the mentioned element
form = document.querySelector('#inputContainer')//assigns a variable to the mentioned element

// Create a "close" button and append it to each list item
var cross = document.getElementsByTagName('li');
for(i=0;i<cross.length;i++){
	var span = document.createElement('span')
	span.innerHTML = '  X';
	span.className = 'close';
	cross[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName('close');
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


form.onsubmit = function(event){//assigns a function to run upon the submitting of the form
	event.preventDefault();//stops the submit from causing the browser to refresh the page
	const txt =txtBox.value;
	if(txt == ""){
	}
	else{
		task = document.createElement('li');
		task.innerHTML  = txt;
		toDo.appendChild(task);
		
	}
	txtBox.value = ''
	span = document.createElement('span')
	span.innerHTML = '  X';
	span.className = 'close';
	task.appendChild(span);
	console.log(close.length)

	for (i=0;i<close.length;i++){
		close[i].onclick = function(){
			var div = this.parentElement;
			div.style.display = "none";
		}


	}
}	










	
	
	

	
		





