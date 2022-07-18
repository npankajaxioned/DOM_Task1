var categories = document.querySelectorAll('.list');
var selectedImage = document.querySelectorAll('.tab-image');
for (var images of selectedImage) {
  images.classList.add('image-active');
}
for (i = 0; i < categories.length; i++) {
  categories[i].addEventListener('click', tabFilter)
}
function tabFilter() {
    for (j = 0; j < categories.length; j++) {
        categories[j].classList.remove('list-active');
    }
    this.classList.add('list-active');
    var dataList = this.getAttribute('data-list');

    for (var images of selectedImage) {
        images.classList.remove('image-active');
        if (images.getAttribute('data-name') == dataList || dataList == 'all') {
            images.classList.add('image-active');
        }
    }
}


/* Hamburger Menu Starts Here */

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click",() => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
})









