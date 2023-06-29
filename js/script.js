document.addEventListener('DOMContentLoaded', function (event) {
  initCountdown();
  initMonth();
  //initForms();
});

function initCountdown() {
  var countdown = document.querySelector('.countdown');

  if (countdown) {
    var d = new Date(),
      start = d.getTime(),
      time = 1199;

    var min = countdown.querySelector('.minutes'),
      sec = countdown.querySelector('.seconds');

    const intervalID = setInterval(function () {
      d = new Date();
      var timeleft = time - Math.floor((d.getTime() - start) / 1000);
      var mins = parseInt(timeleft / 60);
      mins = ('0' + mins).slice(-2);
      var secs = parseInt(timeleft % 60);
      secs = ('0' + secs).slice(-2);
      if (timeleft > 0) {
        min.innerHTML = mins;
        sec.innerHTML = secs;
      } else {
        min.innerHTML = '00';
        sec.innerHTML = '00';
        clearInterval(intervalID);
      }
    }, 1000);
  }
}

function initMonth() {
  var m = document.querySelector('.month');
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  m.innerHTML = month[d.getMonth()];
}

function initForms() {
  document.querySelectorAll('.validate').forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
}