import './cycle';
import './scrollReveal';


  const blocks = document.querySelectorAll(".slide__block");

  let config = []
  for(let i = 0; i <= 1; i+=0.01){ config.push(i) }

  const io = new IntersectionObserver(ioHandler, {threshold: config});


  [].forEach.call(blocks, block => {
    io.observe(block)
  })

  function ioHandler(entries) {
    for (let entry of entries) {
      entry.target.style.opacity = entry.intersectionRatio.toFixed(2);
      var degree = entry.intersectionRatio.toFixed(1);

      // entry.target.addEventListener('click', function(e) {
      //   if (this.nextElementSibling !== null) {
      //     this.nextElementSibling.scrollIntoView({
      //       'behavior': 'smooth'
      //     });
      //   }
      // },true);

      if (entry.intersectionRatio > .5) {
        entry.target.classList.add('active')

        document.onkeydown = function (e) {
            switch (e.key) {
                case 'ArrowLeft':
                  if (entry.target.previousElementSibling !== null) {
                    entry.target.previousElementSibling.scrollIntoViewIfNeeded({
                      'behavior': 'smooth'
                    });
                  }
                    break;
                case 'ArrowRight':
                  if (entry.target.nextElementSibling !== null) {
                    entry.target.nextElementSibling.scrollIntoViewIfNeeded({
                      'behavior': 'smooth'
                    });
                  }
            }
        }

      } else {
        entry.target.classList.remove('active')
      }
    }
  }



  function scaleContent(el) {
    var aspect = {
      w : 1024,
      h : 720
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

  var rootEl = document.querySelector('.slide__wrapper');

  window.addEventListener('resize', function(){
    scaleContent(rootEl)
  }, true);
  scaleContent(rootEl)
