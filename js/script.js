document.addEventListener('DOMContentLoaded', function (event) {
  var app = document.querySelector('.app');
  if (app) {
    app.querySelectorAll('.app-answers a').forEach(function (a) {
      a.addEventListener('click', function (event) {
        event.preventDefault();
        let active = app.querySelector('.app-step.active'),
          next = active.nextElementSibling;
        active.classList.remove('active');
        setTimeout(function () {
          active.classList.remove('visible');
          next.classList.add('visible');
          setTimeout(function () {
            next.classList.add('active');
          }, 10);
        }, 300);
      });
    });
  }
});