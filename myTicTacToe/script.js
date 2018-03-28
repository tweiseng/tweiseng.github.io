boxes = document.querySelectorAll('.square')//set a single variable to represent all the squares
console.log(boxes)//check to see what the selection comes up as, ie data type
var boxClick;	//setting this variable outside of the function to see whether it can have global scope where the variable will still be assigned outside of the function
const allBox = document.getElementsByTagName("td")//to turn every box into an array
console.log(allBox)

var winCombo = [[0,1,2],
				[3,4,5],
				[6,7,8],
				[0,3,6],
				[1,4,7],
				[2,5,8],
				[0,4,8],
				[2,4,6]]







//the following is to loop through the array created by the selection
for(set = 0;set<boxes.length;set++){
	boxes[set].onclick = function(crazy){
		boxClick = crazy.target;//assigning event.target to the variable 
		// console.log(boxClick)

		
		//alternate pieces
		if(crazy.target.innerHTML == ""){
			if (set%2){
				boxClick.innerHTML = "O";
				set++
			}
			else{
				boxClick.innerHTML = "X";
				set++
			}
			
		}
			
			
		
		else {
			console.log('theres already something!')
		}
		for(i=0;i<winCombo.length;i++){
		if(boxes[winCombo[i][0]].innerHTML==boxes[winCombo[i][1]].innerHTML&& boxes[winCombo[i][1]].innerHTML==boxes[winCombo[i][2]].innerHTML
		&&boxes[winCombo[i][0]].innerHTML!=''){
		alert('you won')	}
		}	
		
	}		
}	






	


