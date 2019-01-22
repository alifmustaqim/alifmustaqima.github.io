console.log("JS connected")
const galleryItem = document.getElementsByClassName("gallery-item");
const lightboxImage = document.getElementById("lightbox-image")
const lightbox = document.querySelector(".lightbox");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const close = document.getElementById("close");

function showImage(event){
    lightbox.classList.remove("hidden");
    let imgSrc = event.target.getAttribute('src');
    lightboxImage.setAttribute("src", imgSrc);
}
function closeImage(){
    lightbox.classList.add("hidden");
}
let imageItemSrc = [];
for(let i=0; i<galleryItem.length; i++){
    galleryItem[i].onclick = showImage;
    imageItemSrc.push(galleryItem[i].children[0].getAttribute("src"))
}

function nextImage(){
 
    let i = imageItemSrc.indexOf(lightboxImage.getAttribute("src"))
  
    if(i == 2){
        alert("this is the last image")
    } else {
        i++
       lightboxImage.setAttribute("src", imageItemSrc[i]);
    }
   }
function prevImage(){
   
    let i = imageItemSrc.indexOf(lightboxImage.getAttribute("src"))
 
    if(i == 0){
        alert("this is the last image")
    } else {
        i--
       lightboxImage.setAttribute("src", imageItemSrc[i]);
    }
   }
close.onclick = closeImage;
next.onclick = nextImage;
prev.onclick = prevImage;