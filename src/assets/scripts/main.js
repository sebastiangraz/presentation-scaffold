import { testFunction } from './examplejQuery';
import { isInViewport, scrollStop } from './scroll';
import { forEach } from './forEach';

const blocks = document.querySelectorAll(".slide__block");

function ioHandler(entries) {
  for (let entry of entries) {
    entry.target.style.opacity = entry.intersectionRatio.toFixed(2);
    console.log(entry);
    entry.target.addEventListener('click', function(e) {
      if (this.nextElementSibling == null) {
        this.previousElementSibling.scrollIntoView({
          'behavior': 'smooth',
        });
      } else {
        this.nextElementSibling.scrollIntoView({
          'behavior': 'smooth',
        });
      }

    });

    if (entry.intersectionRatio > .5) {
      entry.target.classList.add('active')
    } else {
      entry.target.classList.remove('active')
    }
  }
}

var slides = document.querySelectorAll('.slide__block');
var rootEl = document.querySelector('.slide__wrapper');

function scaleContent(el) {
  var aspect = {
    w : 1024,
    h : 768
  }
  var viewportW = window.innerWidth * 0.9;
  var viewportH = window.innerHeight;

  var scale = Math.min(
    viewportW / aspect.w,
    viewportH / aspect.h
  );
  var ratio = window.innerWidth / window.innerHeight
  Object.assign(el.style,{transform: "translate(-50%, -50%) scale(" + scale + ")"})
}

window.addEventListener('resize', function(){
  scaleContent(rootEl)
}, true);
scaleContent(rootEl)

// const ioConfig = {
//   root: null,
//   threshold: 0.5
// };
let config = []
for(let i = 0; i <= 1; i+=0.01){ config.push(i) }

const io = new IntersectionObserver(ioHandler, {threshold: config});

[].forEach.call(blocks, block => {
  io.observe(block)
})
