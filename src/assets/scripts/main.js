import { testFunction } from './examplejQuery';
import { isInViewport, scrollStop } from './scroll';
import { forEach } from './forEach';

const blocks = document.querySelectorAll(".slide__block");

function ioHandler(entries) {
  for (let entry of entries) {
    if (entry.intersectionRatio > .5) {
      entry.target.classList.add('active')
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
  var ratio = window.innerWidth / window.innerHeight // confirmed working

  console.log(scale);
  Object.assign(el.style,{transform: "translate(-50%, -50%) scale(" + scale + ")"})
}

window.addEventListener('resize', function(){
  scaleContent(rootEl)
}, true);
scaleContent(rootEl)

const ioConfig = {
  root: null,
  threshold: 0.5
};

const io = new IntersectionObserver(ioHandler, ioConfig);

[].forEach.call(blocks, block => {
  io.observe(block)
})
