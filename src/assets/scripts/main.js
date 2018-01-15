import { testFunction } from './examplejQuery';
import { isInViewport, scrollStop } from './scroll';
import { forEach } from './forEach';
import './helpers';

const blocks = document.querySelectorAll(".slide__block");

function ioHandler(entries) {
  for (let entry of entries) {
    if (entry.intersectionRatio > .5) {
      entry.target.classList.add('active')
    } else {
      entry.target.classList.remove('active')
    }
  }
}


var rootEl = document.querySelector('.slide__wrapper');

const ioConfig = {
  root: rootEl,
  threshold: 0.5
};

const io = new IntersectionObserver(ioHandler, ioConfig);

[].forEach.call(blocks, block => {
  io.observe(block)
})
