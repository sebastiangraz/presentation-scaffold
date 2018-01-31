import { questions, userResearch, InterviewQuestions, hmw } from './data';

var intervalObjOne = {array: questions, interval : 'undefined',tick:0,className:'cycle_questions'}
var intervalObjTwo = {array: userResearch, interval: 'undefined',tick:0,className:'cycle_research'}
var intervalObjThree = {array: InterviewQuestions, interval: 'undefined',tick:0,className:'cycle_interview'}
var intervalObjFour = {array: hmw, interval: 'undefined',tick:0,className:'cycle_hmw'}

var domSelectorByClass = document.getElementsByClassName.bind(document)
var domSelectorByQuery = document.querySelector.bind(document)

var intervalArr = [intervalObjOne,intervalObjTwo, intervalObjThree, intervalObjFour]

function ArrayPlusDelay(delegate, delay,intervalObj) {

    var interval = setInterval(function() {
          delegate(intervalObj.array[intervalObj.tick])
            if(intervalObj.tick++ >= (intervalObj.array).length - 1) {
              intervalObj.tick=0
            }
        }, delay)

  return interval
}

intervalArr.forEach(function(elem,index) {
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
