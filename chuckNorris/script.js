var theJoke =[]






btn = document.querySelector(".genJoke")
para = document.querySelector(".joke")
btn.onclick = function(){
	fetch('https://api.chucknorris.io/jokes/random')
.then(function(kalimuthu){
	console.log(kalimuthu);
	return kalimuthu.json();

})
.then(function(result){
	theJoke.push(result.value);
	console.log(result)
	console.log(result.value);
	// para.innerHTML = theJoke[Math.round(Math.random()*10)]
	para.innerHTML = result.value

})


}





