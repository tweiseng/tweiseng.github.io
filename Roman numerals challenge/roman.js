const form = document.getElementById("user-input")
const input = document.getElementById("arabic-num")


const symbols = ["I","V","X","L","C","D","M"]

function sDigit(number){
	if(number<4){
			var answer = ""
		for(let i=0;i<number;i++){
			 answer = answer+ symbols[0]
		}
	}
	else if(number ==4){
		answer = symbols[0]+symbols[1]
	}
	else if(number>5 && number<9){
			answer = symbols[1]
		for(let i=5;i<number;i++){
			answer = answer +symbols[0]
		}
	}
	else if(number ==5){
		answer =symbols[1]
	}
	else if(number ==9){
		answer =symbols[0]+symbols[2]
	}
	return(answer)
}


function dDigit(number){
	if(number<4){
			var answer = ""
		for(let i=0;i<number;i++){
			 answer = answer+ symbols[2]
		}
	}
	else if(number ==4){
		answer = symbols[2]+symbols[3]
	}
	else if(number>5 && number<9){
			answer = symbols[3]
		for(let i=5;i<number;i++){
			answer = answer +symbols[2]
		}
	}
	else if(number ==5){
		answer =symbols[3]
	}
	else if(number ==9){
		answer =symbols[2]+symbols[4]
	}
	return(answer)
}

function trDigit(number){
	if(number<4){
			var answer = ""
		for(let i=0;i<number;i++){
			 answer = answer+ symbols[4]
		}
	}
	else if(number ==4){
		answer = symbols[4]+symbols[5]
	}
	else if(number>5 && number<9){
			answer = symbols[5]
		for(let i=5;i<number;i++){
			answer = answer +symbols[4]
		}
	}
	else if(number ==5){
		answer =symbols[5]
	}
	else if(number ==9){
		answer =symbols[4]+symbols[6]
	}
	return(answer)
}

function qDigit(number){
	if(number<4){
			var answer = ""
		for(let i=0;i<number;i++){
			 answer = answer+ symbols[6]
		}
	}
	return(answer)
}
function convert(number){
	var answer
	if(number.toString().length==4){
		array=number.toString().split("")
		if(array[0]>3){
			answer="I didn't write enough code to go beyond 3999 but I can if you would like"
		}
		else if(array[0]<=3){
			if(array[3]==0){
				if(array[2]==0){
					if(array[1]==0){
						answer = qDigit(Number(array[0]))
					}
				}
			}
			else if(array[3]>0){
				if(array[2]==0){
					if(array[1]==0){
						answer = qDigit(Number(array[0]))+sDigit(Number(array[3]))
					}
					else if(array[1]>0){
						answer = qDigit(Number(array[0]))+trDigit(Number(array[1]))+sDigit(Number(array[3]))
					}
				}
				else if(array[2]>0){
					if(array[1]==0){
						answer = qDigit(Number(array[0]))+dDigit(Number(array[2]))+sDigit(Number(array[3]))	
					}
					else if(array[1]>0){
						answer = qDigit(Number(array[0]))+trDigit(Number(array[1]))+dDigit(Number(array[2]))+sDigit(Number(array[3]))	
					}
				}

			}
		}
	}
	if(number.toString().length ==3){
		array =number.toString().split("") 
		if(array[2] ==0){
			if(array[1]==0){
				answer = trDigit(Number(array[0]))
			}
			else if(array[1]>0){
				answer = trDigit(Number(array[0]))+dDigit(Number(array[0]))
			}
		}
		else if(array[2]>0){
			if(array[1]==0){
				answer = trDigit(Number(array[0]))+sDigit(Number(array[2]))
			}
			else if(array[1]>0){
				answer = trDigit(Number(array[0]))+dDigit(Number(array[1]))+sDigit(Number(array[2]))
			}
		}
	}
	else if(number.toString().length ==2){
		array =number.toString().split("")
			if(array[1] ==0){
				answer = dDigit(Number(array[0]))
			}
			else if(array[1]>0){
				answer = dDigit(Number(array[0]))+sDigit(Number(array[1]))
			}
	}
	else if(number.toString().length ==1){
		answer =sDigit(number)
	}		
	window.alert(answer)
}



form.onsubmit = function(){
let inval = input.value
event.preventDefault()
convert(inval)
}