document.addEventListener('DOMContentLoaded', function (event) {
  initHeader();
  //initClick();
  initFAQ();
  initCountdown();
  initMonth();
  initVideo();
  initAffiliate();
});

function initHeader() {
  var nav = document.querySelector('.header__nav');
  if (nav) {
    document.querySelector('.header__toggle').addEventListener('click', function (event) {
      event.preventDefault();
      if (nav.classList.contains('visible')) {
        nav.classList.remove('visible');
      } else {
        nav.classList.add('visible');
      }
      return false;
    });

    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function (event) {
        event.preventDefault();
        var t = document.querySelector(a.getAttribute('href'));
        if (t) {
          window.scroll({top: t.offsetTop, left: 0, behavior: 'smooth'});
          nav.classList.remove('visible');
        }
      });
    });
  }
}

function initClick() {
  if (document.querySelector('body').classList.contains('noclick')) {
    document.addEventListener('contextmenu', event => event.preventDefault());
  }
}

function initFAQ() {
  var faq = document.querySelector('.faq');
  if (faq) {
    faq.querySelectorAll('.faq__item').forEach(function (i) {
      i.querySelector('.faq__toggle').addEventListener('click', function (event) {
        event.preventDefault();
        var item = i;
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          item.classList.add('active')
        }
        return false;
      });
    });
  }
}

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
  if (m) {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date();
    m.innerHTML = month[d.getMonth()];
  }
}

function initVideo() {
  var players = document.querySelectorAll('.video__player'),
    ld_video_controls = 'false';

  if (players) {
    players.forEach(player => {
      var play = player.querySelector('.video__play'),
        unmute = player.querySelector('.video__unmute'),
        video = player.dataset.video;

      window._wq = window._wq || [];

      _wq.push({
        id: video,
        options: {
          fullscreenOnRotateToLandscape: !1,
          copyLinkAndThumbnailEnabled: !1,
          playsinline: !0,
          resumable: !1,
          seo: !1,
          volume: 1,
          wmode: 'transparent',
          playbar: ld_video_controls,
          smallPlayButton: ld_video_controls,
          volumeControl: ld_video_controls,
          fullscreenButton: ld_video_controls
        },
        onReady: function (e) {
          play.addEventListener('click', function (event) {
            event.preventDefault();
            player.classList.add('playing');
            e.play();
          });
          unmute.addEventListener('click', function (event) {
            event.preventDefault();
            player.classList.remove('playing');
            e.pause();
          });
          e.bind('play', function () {
            player.classList.add('playing');
          }).bind('pause', function () {
            player.classList.remove('playing');
          }).bind('end', function () {
            player.classList.remove('playing');
          });
        }
      });
    });
  }
}

function initAffiliate() {
  document.querySelectorAll('.affiliate-form').forEach(form => {
    var btn = form.querySelector('.form-more');
    if (btn) {
      btn.addEventListener('click', event => {
        event.preventDefault();
        var more = form.querySelector('.affiliate-form__more');
        if (more.classList.contains('hidden')) {
          more.classList.remove('hidden');
          btn.querySelector('span').innerHTML = 'Hide';
        } else {
          more.classList.add('hidden');
          btn.querySelector('span').innerHTML = 'Show';
        }
      }, false);
    }
  })
}