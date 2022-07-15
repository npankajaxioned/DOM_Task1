
var categories = document.querySelectorAll('.list');
var selectedImage = document.querySelectorAll('.tab-image');
for (var images of selectedImage) {
  images.classList.add('image-active');
}
for (i = 0; i < categories.length; i++) {
  categories[i].addEventListener('click', function () {
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
  })
}






















