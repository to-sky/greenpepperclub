(function () {
  window.vcv && window.vcv.on('ready', function (action) {
    if (action && action !== 'add' && action !== 'update') {
      return;
    }
    var showControls = function (controls) {
      controls && controls.setAttribute('data-vcv-video-player-controls-active', 'true');
    };
    var hideControls = function (controls) {
      controls && controls.setAttribute('data-vcv-video-player-controls-active', 'false');
    };
    var timeoutHideControls = function (controls) {
      return setTimeout(function () {
        hideControls(controls);
      }, 2000);
    };

    var players = Array.prototype.slice.call(document.querySelectorAll('[data-vce-video-player="true"]'));

    if (players.length) {
      var fullscreenClass = 'vce-self-hosted-video-player-wrapper-fullscreen';
      players.forEach(function (player) {
        var playVideo = function (video, player) {
          video && video.play();
          player && player.setAttribute('data-vcv-video-player-playing', 'true');
        };
        var pauseVideo = function (video, player) {
          video && video.pause();
          player && player.setAttribute('data-vcv-video-player-playing', 'false');
        };

        var video = player.querySelector('video');
        var controls = player.querySelector('[data-vce-video-player-controls="true"]');
        var fullScreen = player.dataset.vceVideoPlayerFullscreen === 'true';
        var controlsTimeout;
        var fullscreenPlay = player.querySelector('.vce-self-hosted-video-fullscreen-play');
        var fullscreenPause = player.querySelector('.vce-self-hosted-video-fullscreen-pause');

        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') !== -1) {
          if (ua.indexOf('chrome') === -1) {
            video.muted = true
          }
        }

        if (fullScreen) {
          var playerParent = player.parentElement;
          playVideo = function (video, player) {
            document.body.appendChild(player);
            player.classList.add(fullscreenClass);
            player.setAttribute('data-vcv-video-player-playing', 'true');
            video && video.play();
          };
          pauseVideo = function (video, player) {
            playerParent.appendChild(player);
            player.classList.remove(fullscreenClass);
            player.setAttribute('data-vcv-video-player-playing', 'false');
            video && video.pause();
          };
          fullscreenPause = null;
        }

        fullscreenPlay && fullscreenPlay.addEventListener('click', function () {
          playVideo(video, player);
        });

        fullscreenPause && fullscreenPause.addEventListener('click', function () {
          pauseVideo(video, player);
        });

        if (video && controls) {
          controls.addEventListener('mousemove', function () {
            showControls(controls);
            controlsTimeout && clearTimeout(controlsTimeout);
            controlsTimeout = timeoutHideControls(controls);
          });

          controls.addEventListener('mouseleave', function () {
            hideControls(controls);
          });

          var play = controls.querySelector('[data-vce-video-player-controls-play="true"]');
          var pause = controls.querySelector('[data-vce-video-player-controls-pause="true"]');
          var fullscreenBtn = controls.querySelector('[data-vce-video-player-controls-fullscreen="true"]');
          var timelineContainer = controls.querySelector('.vce-self-hosted-video-player-timeline-inner');
          var timeline = controls.querySelector('[data-vce-video-player-timeline="true"]');
          var buffer = controls.querySelector('[data-vce-video-player-timeline-buffer="true"]');

          play && play.addEventListener('click', function () {
            playVideo(video, player);
          });

          pause && pause.addEventListener('click', function () {
            pauseVideo(video, player);
          });

          fullscreenBtn && fullscreenBtn.addEventListener('click', function () {
            if (video.requestFullscreen) {
              video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
              video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
              video.webkitRequestFullscreen();
            }
          });

          video.addEventListener('timeupdate', function () {
            timeline && timeline.removeAttribute('style');
            var width = video.currentTime / video.duration * 100;
            timeline && (timeline.style.width = width + '%');
          });

          video.addEventListener('progress', function () {
            if (video.buffered.length) {
              var width = video.buffered.end(0) / video.duration * 100;
              buffer && (buffer.style.width = width + '%');
            }
          });

          if (!video.loop) {
            video.addEventListener('ended', function () {
              pauseVideo(video, player);
            });
          }

          timeline && timelineContainer && timelineContainer.addEventListener('click', function (event) {
            var timelineRect = timelineContainer.getBoundingClientRect();
            var percentage = (event.clientX - timelineRect.left) / timelineRect.width;
            var seekedTime = video.duration * percentage;
            timeline.style.transition = 'unset';
            video.pause();
            video.currentTime = seekedTime;
          });

          timeline && video.addEventListener('seeked', function () {
            video.play();
          });

        }
        if (video && video.autoplay) {
          playVideo(video, player);
        }

        if (video && fullScreen) {
          var closeButton = player.querySelector('.vce-self-hosted-video-close-button');

          closeButton && closeButton.addEventListener('click', function () {
            pauseVideo(video, player);
          });
        }
      });
    }
  });
})()