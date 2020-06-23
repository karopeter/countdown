const start = document.getElementById('start');
const reset = document.getElementById('reset');

const h = document.getElementById('hour');
const m = document.getElementById('minute');
const s = document.getElementById('sec');

// Start a reference to the variable
const startTimer = null;

function timer() {
   if(h.value == 0 && m.value == 0 && s.value == 0) {
       h.value = 0;
       m.value = 0;
       s.value = 0;
   } else if(s.value != 0) {
       s.value--;
   } else if(m.value != 0 && s.value == 0) {
       s.value = 59;
       s.value--;
   } else if(h.value != 0 && m.value == 0) {
       m.value = 60;
       h.value--;
   }
   return;
}

function stopTimer() {
  clearInterval(startTimer);
}

start.addEventListener('click', function() {
  // Initialize the variable startTimer
   function startInterval() {
       startTimer - setInterval(function() {
         timer();
       }, 1000);
   }
   startInterval()
})

reset.addEventListener('click', function() {
   h.value = 0;
   m.value = 0;
   s.value = 0;
   stopTimer();
});