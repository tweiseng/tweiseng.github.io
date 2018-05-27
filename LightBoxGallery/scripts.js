const closeButton = document.querySelector(".lightbox-close");
const lightBox = document.querySelector(".lightbox")
const galleryItems = document.querySelectorAll(".gallery-item")
const lightBoxImage = document.querySelector(".lightbox-image")
const nextButton = document.querySelector(".lightbox-next")
const prevButton = document.querySelector(".lightbox-prev")

//function below takes in an event parameter since it is going to be an event handler
function showImage(event){
		//show lightbox
		lightBox.classList.remove('hidden')
		const elementClickedOn = event.target;
		const wholeGalleryItem = elementClickedOn.parentElement
		//replace lightbox-image with clicked on image's image and caption
		lightBoxImage.innerHTML = wholeGalleryItem.innerHTML
	}
//function below takes in an event parameter since it is going to be an event handler
function closeImage(){
	event.preventDefault()
	lightBox.classList.add('hidden');
}

function nextImage(){
	event.preventDefault()
	for (let j =0; j<galleryItems.length; j++){
	let items = galleryItems[j]
		if (lightBoxImage.innerHTML == galleryItems[j].innerHTML && j==galleryItems.length-1){
		}
		else if (lightBoxImage.innerHTML == galleryItems[j].innerHTML && j<galleryItems.length-1){
			lightBoxImage.innerHTML = galleryItems[j+1].innerHTML
			j = galleryItems.length
		}
	}
}

function prevImage(){
	event.preventDefault()
	for (i=0; i<galleryItems.length; i++){
		if(lightBoxImage.innerHTML == galleryItems[i].innerHTML && i==0){
		}
		else if(lightBoxImage.innerHTML == galleryItems[i].innerHTML && i>0){
			lightBoxImage.innerHTML = galleryItems[i-1].innerHTML
			i=galleryItems.length
		}
	}
}

for (let i =0; i<galleryItems.length; i++){
	let item = galleryItems[i];	
	item.onclick = showImage 
}

closeButton.onclick = closeImage

nextButton.onclick = nextImage

prevButton.onclick = prevImage
