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
var currDataIndex = 0;

var rootEl = document.querySelector('.slide__wrapper');

var block = document.querySelectorAll('.block-border');

// function doResize(el) {
//   var scale, origin;
//
//   scale = Math.min(
//     window.innerWidth / el.getBoundingClientRect().width,
//     window.innerHeight / el.getBoundingClientRect().width
//   );
//
//   Object.assign(el.style,{transform: "scale(" + scale + ")"})
// }
//
//
// forEach(block, function (index, element) {
//   doResize(element)
// });

const ioConfig = {
  root: rootEl,
  threshold: 0.5
};

const io = new IntersectionObserver(ioHandler, ioConfig);

[].forEach.call(blocks, block => {
  io.observe(block)
})
