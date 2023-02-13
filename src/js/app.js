let animation = anime({
    targets: '.opening-screen',
    height: '0px',
    delay: 2000,
    easing: 'easeInOutQuad'
});   

let textanimation = anime({
    targets: '.opening-screen h2',
    keyframes: [
        {translateY: '100%', opacity: '0'},
        {translateY: '0', opacity: '1'},
        {translateY: '-100%'},
    ],
    delay: anime.stagger(100),
    easing: 'spring(1, 80, 10, 0)',
    duration: 3000,
});

anime.timeline()
.add({
    targets: '.container-block .block-content',
    translateY: [100, 0],
    easing: 'easeOutExpo',
    duration: 1400,
    delay: anime.stagger(100, {start: 2800})
});

anime.timeline()
.add({
    targets: '.container-block .hero-content',
    translateY: [1000, 0],
    easing: 'easeOutExpo',
    duration: 1400,
    delay: anime.stagger(100, {start: 2800})
});

let arrow = anime({
    targets: '.arrow-svg',
    keyframes: [
        {scaleX: '1.2'},
        {scaleX: '1'},
    ],
    easing: 'easeOutExpo',
    duration: 3000,
    loop: true, 
})  

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');
var project = document.querySelector('.project-view');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})