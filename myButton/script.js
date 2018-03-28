		
butn =document.querySelector('#runningBtn');
butnJail = document.getElementById('btnboundary')

butnJail.style.position = 'relative'
butnJail.style.height = '200px'
butnJail.style.border = '1px solid black'
console.log(butnJail.style)


butn.style.position = 'absolute'
butn.style.width = '100px'
butn.style.height = '100px'

let count=0

butn.onmouseover = function(){


		let rdmNum = Math.round(Math.random()*500);
		console.log(rdmNum);
		butn.style.left = rdmNum+'px'
		butn.style.top = rdmNum+'px'
		butn.style.right = rdmNum+'px'
		butn.style.bottom = rdmNum+'px'
		count+=1

		if(count>=10){
			butn.style.position='static'
		}
		// le = Math.floor(Math.random()* 1000);
		// butn.style.left = String(le) + 'px' ;
		// butn.style.top = String(le) + 'px' ;
		// butn.style.right = String(le) + 'px' ;
		// butn.style.bottom = String(le) + 'px' ;
		// count = count + 1;
		// if (count == 10){
		// 	butn.style.position = 'static';
}
	// butn.style.left= 30px
