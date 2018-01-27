//import { forEach } from './forEach';
import './cycle';

import $ from './globals';

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

      entry.target.addEventListener('click', function(e) {
        if (this.nextElementSibling !== null) {
          this.nextElementSibling.scrollIntoView({
            'behavior': 'smooth'
          });
        }
      },true);

      if (entry.intersectionRatio > .5) {
        entry.target.classList.add('active')

        document.onkeydown = function (e) {
            switch (e.key) {
                case 'ArrowLeft':
                  if (entry.target.previousElementSibling !== null) {
                    entry.target.previousElementSibling.scrollIntoView({
                      'behavior': 'smooth'
                    });
                  }
                    break;
                case 'ArrowRight':
                  if (entry.target.nextElementSibling !== null) {
                    entry.target.nextElementSibling.scrollIntoView({
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


      // const cycle_research = document.querySelector('.cycle_research')
      // const length = userResearch.length;
      //
      // const getNextIdx = (idx = 0, length, direction) => {
      //    switch (direction) {
      //      case 'next': return (idx + 1) % length;
      //      case 'prev': return (idx == 0) && length - 1 || idx - 1;
      //      default:     return idx;
      //    }
      // }
      //
      // let idx; // idx is undefined, so getNextIdx will take 0 as default
      // const getNewIndexAndRender = (direction) => {
      //      idx = getNextIdx(idx, length, direction);
      //      cycle_research.innerHTML = userResearch[idx]
      // }
      //
      // cycle_research.addEventListener('click', function(){
      //   getNewIndexAndRender('next')
      // }, true)
      //
      // getNewIndexAndRender();

      // function ArrayPlusDelay(array, delegate, delay) {
      //   var i = 0
      //    // seed first call and store interval (to clear later)
      //     var interval = setInterval(function() {
      //       	// each loop, call passed in function
      //         delegate(array[i]);
      //           // increment, and if we're past array, clear interval
      //         if(i++ >= array.length - 1) {
      //           i = 0 //clearInterval(interval);
      //         }
      //     }, delay)
      //   return interval
      // }
      //
      // ArrayPlusDelay(questions, function(obj) {
      //   document.querySelector('.cycle_questions').innerHTML = obj
      // },2000)
      //
      // ArrayPlusDelay(userResearch, function(obj) {
      //   document.querySelector('.cycle_research').innerHTML = obj
      // },2000)
      //
      // ArrayPlusDelay(InterviewQuestions, function(obj) {
      //   document.querySelector('.cycle_interview').innerHTML = obj
      // },2000)

      var rafId = null;
      var delay = 120;
      var lTime = 0;

      function scroll() {
        var scrollTop = $(window).scrollTop();
        var height = $(window).height()
        var visibleTop = scrollTop + height;
        $('.reveal').each(function() {
          var $t = $(this);
          if ($t.hasClass('reveal_visible')) { return; }
          var top = $t.offset().top;
          if (top <= visibleTop) {
            if (top + $t.height() < scrollTop) {
              $t.removeClass('reveal_pending').addClass('reveal_visible');
            } else {
              $t.addClass('reveal_pending');
              if (!rafId) requestAnimationFrame(reveal);
            }
          }
        });
      }
      function reveal() {
        rafId = null;
        var now = performance.now();

        if (now - lTime > delay) {
          lTime = now;
          var $ts = $('.reveal_pending');
          $($ts.get(0)).removeClass('reveal_pending').addClass('reveal_visible');
        }
        if ($('.reveal_pending').length >= 1) rafId = requestAnimationFrame(reveal);
      }

      $(scroll);
      $(window).scroll(scroll);



// Barba.Pjax.start();

// Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
//   init()
// });



// Barba.Dispatcher.on('initStateChange', function (newDom, oldDom) {
//   init()
//   if (oldDom) {
//     // Assuming the router have a method 'destroyEvents' to handle the "clean-up"
//     console.log('newday');
//   }
// })
