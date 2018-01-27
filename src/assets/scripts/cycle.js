import { questions, userResearch, InterviewQuestions } from './data';


var intervalObjOne = {array: questions,interval : 'undefined',tick:0,className:'cycle_questions'}
var intervalObjTwo = {array: userResearch,interval: 'undefined',tick:0,className:'cycle_research'}
var intervalObjThree = {array: InterviewQuestions,interval: 'undefined',tick:0,className:'cycle_interview'}

var domSelectorByClass = document.getElementsByClassName.bind(document)
var domSelectorByQuery = document.querySelector.bind(document)

var intervalArr = [intervalObjOne,intervalObjTwo, intervalObjThree]

function ArrayPlusDelay(delegate, delay,intervalObj) {

    var interval = setInterval(function() {
	        delegate(intervalObj.array[intervalObj.tick])
            if(intervalObj.tick++ >= (intervalObj.array).length - 1) {
	            intervalObj.tick=0
            }
        }, delay)

  return interval
}

intervalArr.forEach(function(elem,index){
  attachInterval(elem)
  addMouseLeaveEvent(elem)
  addMouseOverEvent(elem)
})

function attachInterval(intervalObj){
  intervalObj.interval =  ArrayPlusDelay(function(obj) {
	 domSelectorByQuery('.'+intervalObj.className).innerHTML = obj
 },1000,intervalObj)
}

function addMouseOverEvent(intervalObj){
    domSelectorByClass(intervalObj.className)[0].addEventListener('mouseover',function(event){
	   clearInterval(intervalObj.interval);
     this.classList.add('paused')
	});
}

function addMouseLeaveEvent(intervalObj){
    domSelectorByClass(intervalObj.className)[0].addEventListener('mouseleave',function(event){
        attachInterval(intervalObj)
        this.classList.remove('paused')
    });
}

// var myFnGenerator = function(array, delegate, interval) {
//   var i = 0;
//   return function() {
//     if (interval.stop) {
//       return false;
//     }
//       delegate(array[i]);
//       if(i++ >= array.length - 1) {
//        i=0
//       }
//   };
//
// }
// function ArrayPlusDelay(array, delegate, delay) {
//   // The object which store your state
//   var interval = {
//     stop: true
//   };
//   var fn = myFnGenerator(array, delegate, interval);
//   interval.timeout = setInterval(fn, delay);
//   interval.stop = false;
//   return interval;
// }
//
// var intervalquestions = ArrayPlusDelay(questions, function(obj) {
//   document.querySelector('.cycle_questions').innerHTML = obj
// },1000)
//
// var intervalresearch = ArrayPlusDelay(userResearch, function(obj) {
//     document.querySelector('.cycle_research').innerHTML = obj
// },1000)
//
// document.querySelector('.cycle_questions').addEventListener('mouseenter',function(event){
//    intervalquestions.stop = true;
// });
// document.querySelector('.cycle_questions').addEventListener('mouseout',function(event){
//    intervalquestions.stop = false;
// });
//
//
// document.querySelector('.cycle_research').addEventListener('mouseenter',function(event){
//    intervalresearch.stop = true;
// });
// document.querySelector('.cycle_research').addEventListener('mouseout',function(event){
//    intervalresearch.stop = false;
// });
