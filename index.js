var slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {showSlides(slideIndex += n)}
function currentSlide(n) {showSlides(slideIndex = n)}
function showSlides(n) {
    var i
    var slides = document.getElementsByClassName('mySlides')
    if (n == undefined) {n = ++slideIndex}
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {slides[i].style.display = 'none'}
    slides[slideIndex - 1].style.display = 'block'
    setTimeout(showSlides, 5000)
}
// const container = document.querySelector('.slideshow-container');
// for (let i=1; i<7; i++){
//     const div = document.createElement('div')
//     div.className='mySlides fade';
//     div.innerHTML=`<img src="img/${i}.jpg" class="imgg";">`
//     container.append(div)
// }
