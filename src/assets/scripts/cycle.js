import { questions, userResearch, InterviewQuestions } from './data';

var myFnGenerator = function(array, delegate, interval) {
  var i = 0;
  return function() {
    if (interval.stop) {
      return false;
    }
      delegate(array[i]);
      if(i++ >= array.length - 1) {
       i=0
      }
  };

}
function ArrayPlusDelay(array, delegate, delay) {
  // The object which store your state
  var interval = {
    stop: true
  };
  var fn = myFnGenerator(array, delegate, interval);
  interval.timeout = setInterval(fn, delay);
  interval.stop = false;
  return interval;
}

var intervalquestions = ArrayPlusDelay(questions, function(obj) {
  document.querySelector('.cycle_questions').innerHTML = obj
},1000)

var intervalresearch = ArrayPlusDelay(userResearch, function(obj) {
    document.querySelector('.cycle_research').innerHTML = obj
},1000)

document.querySelector('.cycle_questions').addEventListener('mouseenter',function(event){
   intervalquestions.stop = true;
});
document.querySelector('.cycle_questions').addEventListener('mouseout',function(event){
   intervalquestions.stop = false;
});


document.querySelector('.cycle_research').addEventListener('mouseenter',function(event){
   intervalresearch.stop = true;
});
document.querySelector('.cycle_research').addEventListener('mouseout',function(event){
   intervalresearch.stop = false;
});
