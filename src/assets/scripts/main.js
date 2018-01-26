//import { forEach } from './forEach';
// import * as Barba from './vendor/barba';

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

      // entry.target.addEventListener('click', function(e) {
      //   if (this.nextElementSibling !== null) {
      //     this.nextElementSibling.scrollIntoView({
      //       'behavior': 'instant'
      //     });
      //   }
      // },true);

      if (entry.intersectionRatio > .5) {
        entry.target.classList.add('active')

        document.onkeydown = function (e) {
            switch (e.key) {
                case 'ArrowLeft':
                  entry.target.previousElementSibling.scrollIntoView({
                    'behavior': 'instant'
                  });
                    break;
                case 'ArrowRight':
                  if (this.nextElementSibling !== null) {
                    entry.target.nextElementSibling.scrollIntoView({
                      'behavior': 'instant'
                    });
                  }
            }
        }

      } else {
        entry.target.classList.remove('active')
      }
    }
  }
  function isInPage(node) {
    return (node === document.body) ? false : document.body.contains(node);
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



  var questions = [
    "The experience of being at a restaurant needs to be undigitalised. Its a very human-human heavy interaction and it should not obstacled with cool new tech. Like wise the act of rating servers based on their performance needs to be carefully thought through to not step on any toes.",
    "How does a user know that they can give feedback to their server",
    "Usually there can be many servers that handle one customer. How can we design a solution that caters for that",
    "Many restaurant goers do not review restaurants after dining. Therefore it's important to note that giving feedback to a server should not be a strained experience for the restaurant goer. For instance they shouldnt be forced to leave a review. But for the restaurant goer that commonly leaves a review, it'll be easier for them to also review their server",
    "How do we identify a server within the restaurant? Is there a UI that allows the business owner to add new waiters in the system? Is this already possible to do for existing restaurant data within Google and Gmaps?",
    "Most waiters work together rather than having one waiter the entire night how to deal with that?",
    "Is there a way to undo a rating once it has been submitted?",
    "Can certain feedback from diners be disregarded due to spamming or bullying?",
    "Most restaurants use a hospitality software solution to deal with table seating. Is there a way to easily integrate seamless server identification?",
    "When does the feedback-giving session happen? Ideally the process should be so integrated that the user should be able to rate the server even when they have left the restaurant. That way the restauranteur can be a bit more discreet.",
    "Should the feedback come from anonymous users or from logged in users.",
    "How does the restaurant check-in process look like? How is the restaurant-goer identified? Does the restaurant-goer need to be signed in in order to give feedback?",
    "Assuming most restaurant will not have hi-tech gadgets like NFC (near-field-coms). Or RFID (Radio-frequency identification) or BLE (Bluetooth low-energy). The solution would have to consider a more traditional check-in approach using push notification prompts. A graceful fallback for those restaurants that dont have the tech, perhaps.",
    "Is there an incentive for the restaurant goer to actually check in to the restaurant? Perhaps a discount?",
    "What if the server does not want to participate in the feedback program? Is there a way to include or exclude some of the servers within the restaurant?",
    "Is Google looking to profit from this new business venture? If so how do they do it? Would the restaurant themselves pay a fee to use the service to improve their own server team? At a glance that incentive itself may be enough.",
    "Should the server rating be publicly available? If so can the server themselves choose whether to share their rating? Generally for a restaurant goer they will not be able to pick their server based on their score. They simply get assigned a server whos available at the time so there is no goal in displaying the server rating to the public",
    "Is it of any interest for the restaurant goer to know whether the servers of a particular restaurant are generally well rated? And likewise if the servers in a restaurant have a bad reputation.",
    "How do we make sure the restaurant goers leave a constructive feedback?",
    "It made me think how can we design a experience that caters for those days when a waiter is having a bad day.",
    "Is even a rating-led solution the best? Is there another way to rate a waiter without choosing a number between 1-",
    "That's why its incredibly important that the ratings that are submitted to the app are genuine. And they need to prevent 'bullying'. Whereby the diner can threaten to give a bad rating if this and that",
    "Will there be a list of feedback to choose from? Or can the diner write personal comments",
    "How would I feel if the work I do was scrutinized by ratings and comments?",
    "Avoid flooding the server with bad/good reviews.",
    "Identify if a friend/random customer is rating a server? Could potentially skew the rating",
    "Is there a way to introduce a system that only allows for genuine ratings",
    "How can we encourage diners to give more genuine reviews.",
    "The rating of restaurants and waiters should be integrated. No point developing a new app or website, if there is an opportunity to include it in the existing Google ecosystem. For instance the Google maps reviews of restaurant",
    "Find out if Google can categorize restaurants that actually have waiters. Some restaurants can simply be a hole-in-the-wall with no servers",
    ]

    var userResearch = [
      "Hospitality is a very un-digital industry — when they opened an iPad-only restaurant in Stockholm they made major losses in profit. Service is about human interaction",
      "In Poland its common to find waiter questionnaires where they put a field where they ask you to describe the waiters appearance. This is to identify which waiter the feedback is directed towards",
      "For me 70% of a dining experience is all about the service",
      "I would find a service like this useful because sometimes the place itself has a good rating but the service is terrible",
      "My bartender friend said he’d prefer the whole thing to be based on anonymity",
      "Being rated as a waiter sounds horrible!"
    ]


    var InterviewQuestions = [
      "Are you working in the hospitality industry? And if not, how long did you work in the industry?",
      "What were your motivations or goals when you joined the industry? ",
      "What did you feel was the hardest part in working in the industry? And visa-versa; when did you feel happy working in the industry?",
      "Do you usually leave reviews on other businesses using Google Maps or similar products?",
      "If you dont leave reviews, why not? And if you do leave reviews on businesses, what made you leave a review?",
      "As a waiter/bartender, how would you feel if you were rated by your own customers?",
      "If you were given feedback from your customers, what feedback would you look for?",
      "Do you think the hospitality industry needs to be more digital?"
    ]

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

      function ArrayPlusDelay(array, delegate, delay) {
        var i = 0
         // seed first call and store interval (to clear later)
          var interval = setInterval(function() {
            	// each loop, call passed in function
              delegate(array[i]);
                // increment, and if we're past array, clear interval
              if(i++ >= array.length - 1) {
                i = 0 //clearInterval(interval);
              }
          }, delay)
        return interval
      }

      ArrayPlusDelay(questions, function(obj) {
        document.querySelector('.cycle_questions').innerHTML = obj
      },2000)

      ArrayPlusDelay(userResearch, function(obj) {
        document.querySelector('.cycle_research').innerHTML = obj
      },2000)

      ArrayPlusDelay(InterviewQuestions, function(obj) {
        document.querySelector('.cycle_interview').innerHTML = obj
      },2000)

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
