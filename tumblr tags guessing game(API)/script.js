//query form
const form = document.getElementById('query-form');

//text input field
const query = document.getElementById('query');

const list = document.getElementById('list-data');

const wrong = document.getElementById('wrong');

const right = document.getElementById('right')

const submit = document.getElementById('submit')

const buttons=document.getElementsByTagName('input')

//set onsubmit
form.onsubmit = function(nenepok){
	nenepok.preventDefault();

	getTaggedNames(query.value)
}
const keyWords = ["Malaysia","city","KL","Singapore","chinese food","sun","moon","forest","cars","guns","beach","Japan","ramen","Germany","war","geek"];
var random = Math.round(Math.random()*10)
const tagName = keyWords[random]
fetch('https://api.tumblr.com/v2/tagged?tag='+tagName+'&api_key=16nWtuAsXonfT63gIK9rIPzsTxQKTq3Qjj6pSUivKgPwxS2K0O')
	.then(function(response){
		console.log(response);

		if (!response.ok){
			window.alert("something seems to be off, please send an email to <email address> for help")
			return;
		}
		else{
			return response.json()
			const tags = response.tags
		}
	}).then(function(result){
		if(!result){
			return;
		}
		console.log(result)

		list.innerHTML='';// this is to clear the list everytime i submit for a new search
		const items = result.response;

		for(i=0;i<items.length;i++){

			
				console.log(items[i])//from this we see that each item in the array is itself an object comprising many properties including an image_permalink


				const item = items[i]//created as we may use items[i] quite frequently
				if(item.photos!=undefined){
				const altSizes = item.photos[0].alt_sizes//set this variable to be used in the following variable as if i use the most expanded version it does not work ie item.photos[0].alt_sizes[alt_sizes.length-1].url
				const imgSrc = altSizes[altSizes.length-3].url
				const img = document.createElement('img')//once set this variable we should have to call it at least once in the loop then it will create 20 <img> elements
				
				img.src=imgSrc
				const li = document.createElement('li')
				li.appendChild(img);
				// li.innerHTML = imgSrc
				list.appendChild(li)
			}	
		}


	}).catch(function(error){
		alert("errors sometimes happen, please refresh until you get a set of pictures")
	})

	console.log(tagName)

		const buttonsOrder = [query,submit,wrong,right]

			for(i=0;i<1;i++){
				buttonsOrder[Math.round((Math.random()*3)/2)].value = keyWords[random]
				keyWords.splice(random,1)
			}

			for (i=0;i<buttonsOrder.length;i++){
				randomiser = Math.round(Math.random()*10)
				if(buttonsOrder[i].value==""){
					buttonsOrder[i].value = keyWords[randomiser]
					keyWords.splice(randomiser,1)
				}	
			}		

			for(i=0;i<buttonsOrder.length;i++)
				buttonsOrder[i].onclick = function(event){
					buttonclick = event.target

					if(buttonclick.value == tagName){
						window.alert ("you won!")
					}
					else{
						window.alert("are you stupid??")
					}
			}









// query.onclick= function(){
// 	for(i=0;i<buttonsOrder.length;i++){
// 		for
// 	b


