var slideIndex = 2;
var sliderLocation = -100;
var sliderDom = document.querySelector('.slider-wrapper');
var imagesCounter = sliderDom.children.length;
var slideAnimationEnd = true;

// duplacte first and last images
(function duplacteImages(){
    var firstImg = sliderDom.children[0].cloneNode(true);
    var lasrImg = sliderDom.children[sliderDom.children.length-1].cloneNode(true);
    sliderDom.insertAdjacentElement("beforeend", firstImg);
    sliderDom.insertAdjacentElement("afterbegin", lasrImg);
    imagesCounter += 2; // adding 2 to slider length
})();

// slider function
function showSlides() {
    sliderDom.style.left = sliderLocation + "%";
    sliderDom.style.transition = 'all .3s ease-in-out';
    slideAnimationEnd = false;
}

// next / prev function
function nextImage() {
    if(slideAnimationEnd == true){
        sliderLocation -= 100;
        slideIndex += 1;
        showSlides();
    }
}

function prevImage() {
    if(slideAnimationEnd == true) {
        sliderLocation += 100;
        slideIndex -= 1;
        showSlides();
    }
}

// next / prev click event
document.querySelector(".next").addEventListener("click", nextImage);
document.querySelector(".prev").addEventListener("click", prevImage);

// transitionend event
sliderDom.addEventListener("transitionend", function(){
    sliderDom.style.transition = 'none';
    slideAnimationEnd = true;
    // End of slider
    if (slideIndex === imagesCounter) {
        slideIndex = 2;
        sliderLocation = -100;
        sliderDom.style.left = sliderLocation + "%";

    }
    // Start of slider
    if (slideIndex === 1) {
        slideIndex = imagesCounter -1;
        sliderLocation = -(imagesCounter - 2) * 100;
        sliderDom.style.left = sliderLocation + "%";
    }
});