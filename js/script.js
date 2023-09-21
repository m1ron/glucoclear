document.addEventListener('DOMContentLoaded', function(event) {
    initHeader();
    initFirstLoad();
    //initClick();
    initFAQ();
    initCountdown();
    initMonth();
    initVideo();
    initAffiliate();
    initUpsell();
    initPopup();
    initLocation();
});

function initHeader() {
    var nav = document.querySelector('.header__nav');
    if (nav) {
        document.querySelector('.header__toggle').addEventListener('click', function(event) {
            event.preventDefault();
            if (nav.classList.contains('visible')) {
                nav.classList.remove('visible');
            } else {
                nav.classList.add('visible');
            }
            return false;
        });

        nav.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', function(event) {
                event.preventDefault();
                var t = document.querySelector(a.getAttribute('href'));
                if (t) {
                    window.scroll({ top: t.offsetTop, left: 0, behavior: 'smooth' });
                    nav.classList.remove('visible');
                }
            });
        });
    }
}

function initFirstLoad() {
    let body = document.querySelector('body');
    if (body.classList.contains('firstload')) {
        if (localStorage.getItem('firstload')) {
            body.classList.remove('firstload');
        } else {
            setTimeout(function() {
                body.classList.remove('firstload');
            }, 1860000);
            localStorage.setItem('firstload', true);
        }
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
        faq.querySelectorAll('.faq__item').forEach(function(i) {
            i.querySelector('.faq__toggle').addEventListener('click', function(event) {
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

        const intervalID = setInterval(function() {
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

function initCounter() {
    var countdown = document.querySelector('.counter');
    if (countdown) {
        var d = new Date(),
            start = d.getTime(),
            time = 120;

        var min = countdown.querySelector('.minutes'),
            sec = countdown.querySelector('.seconds');

        clearInterval(window.counter);
        window.counter = setInterval(function() {
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
                clearInterval(counter);
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
                onReady: function(e) {
                    play.addEventListener('click', function(event) {
                        event.preventDefault();
                        player.classList.add('playing');
                        e.play();
                    });
                    // var queryString = window.location.search;
                    // if (queryString) {
                    //     var urlParams = new URLSearchParams(queryString);
                    //     var goValue = urlParams.get("go");
                    //     var hlValue = urlParams.get("hl");
                    //     var ahValue = urlParams.get("ah");
                    //     var apValue = urlParams.get("ap");
                    //     var epValue = urlParams.get("ep");
                    //     if (apValue && apValue === '1') {
                    //         var playvideo = "no";
                    //     } else {
                    //         var playvideo = "yes";
                    //     }
                    // } else {
                    //     var playvideo = "yes";
                    // }
                    // if (playvideo && playvideo === 'yes') {
                    //     console.log(playvideo);
                    //     player.classList.add('playing');
                    //     setTimeout(function() { play.click(); }, 3000);

                    // }
                    unmute.addEventListener('click', function(event) {
                        event.preventDefault();
                        player.classList.remove('playing');
                        e.pause();
                    });
                    e.bind('play', function() {
                        player.classList.add('playing');
                    }).bind('pause', function() {
                        player.classList.remove('playing');
                    }).bind('end', function() {
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

function initPopup() {
    function addEvent(obj, evt, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(evt, fn, false);
        } else if (obj.attachEvent) {
            obj.attachEvent("on" + evt, fn);
        }
    }

    function showPopup(popup) {
        popup.classList.add('visible');
        setTimeout(function() {
            popup.classList.add('open');
            initCounter();
        }, 30);
    }

    function closePopup(popup) {
        popup.classList.remove('open');
        setTimeout(function() {
            popup.classList.remove('visible');
        }, 300);
    }

    document.querySelectorAll('.popup').forEach(function(popup) {
        if (popup.classList.contains('popup-showonmouse')) {
            addEvent(document, 'mouseout', function(e) {
                e = e ? e : window.event;
                var from = e.relatedTarget || e.toElement;
                if (!from || from.nodeName === 'HTML') {
                    if (!popup.classList.contains('visible')) {
                        console.log('done');
                        showPopup(popup);
                    }
                }
            });
        }

        popup.querySelectorAll('.popup-close').forEach(function(p) {
            p.addEventListener('click', function(event) {
                event.preventDefault();
                closePopup(popup);
            });
        });

        popup.querySelectorAll('.js-popup-close').forEach(function(p) {
            p.addEventListener('click', function(event) {
                event.preventDefault();
                closePopup(popup);
            });
        });

        popup.querySelectorAll('.popup-overlay').forEach(function(p) {
            p.addEventListener('click', function(event) {
                event.preventDefault();
                closePopup(popup);
            });
        });
    });

    document.querySelectorAll('.js-popup-open').forEach(function(open) {
        open.addEventListener('click', function(event) {
            event.preventDefault();
            var t = document.querySelector(open.getAttribute('href'));
            if (t) {
                t.classList.add('visible');
                setTimeout(function() {
                    t.classList.add('open');
                }, 30);
            }
        });
    });
}

function initUpsell() {
    document.querySelectorAll('.upsell__accept').forEach(function(upsell) {
        upsell.querySelector('.btn').addEventListener('click', function(event) {
            if (!upsell.querySelector('.upsell__accept-checkbox input[type="checkbox"]').checked) {
                upsell.querySelector('.upsell__accept-alert').classList.add('active');
                event.preventDefault();
            }
        });
    });
}

function initLocation() {
    fetch('https://extreme-ip-lookup.com/json/?key=RJ9gMHCsX7FEeDwducOY')
      .then( res => res.json())
      .then(response => {
          console.log("Country: ", response.country);
          var p = document.createElement('p');
          p.append('Sample Message for ' + response.country);
          document.querySelector('.page').prepend(p);
      })
      .catch((data, status) => {
          console.log('Request failed');
      });
}