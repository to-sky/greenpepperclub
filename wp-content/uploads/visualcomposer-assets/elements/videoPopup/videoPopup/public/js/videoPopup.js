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
      var fullscreenClass = 'vce-video-popup-wrapper-fullscreen';
      players.forEach(function (player) {
        var source = player.dataset.vceVideoSource;
        var checkWindowOrientation = function () {
          if (window.innerWidth >= window.innerHeight) {
            video.removeAttribute('data-vce-video-popup-vertical')
          } else {
            video.setAttribute('data-vce-video-popup-vertical', true)
          }
        };
        var playVideo = function (video, player) {
          player.classList.add(fullscreenClass);
          player.setAttribute('data-vcv-video-player-playing', 'true');
          if (source === 'lib' || source === 'link') {
            video && video.play();
          } else if (source === 'youtube') {
            checkWindowOrientation();
            video && video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            window.addEventListener('resize', checkWindowOrientation);
          } else if (source === 'vimeo') {
            checkWindowOrientation();
            video && video.contentWindow.postMessage('{"method":"play"}', '*');
            window.addEventListener('resize', checkWindowOrientation);
          }
        };
        var pauseVideo = function (video, player) {
          player.classList.remove(fullscreenClass);
          player.setAttribute('data-vcv-video-player-playing', 'false');
          if (source === 'lib' || source === 'link') {
            video && video.pause();
          } else if (source === 'youtube') {
            video && video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            window.removeEventListener('resize', checkWindowOrientation);
          } else if (source === 'vimeo') {
            video && video.contentWindow.postMessage('{"method":"pause"}', '*');
            window.removeEventListener('resize', checkWindowOrientation);
          }
        };

        var video;
        if (source === 'lib' || source === 'link') {
          video = player.querySelector('video');
        } else if (source === 'youtube') {
          video = player.querySelector('.vce-yt-video-player-iframe');
        } else if (source === 'vimeo') {
          video = player.querySelector('.vce-vim-video-player-iframe');
        }

        if (!video) {
          return
        }

        var controls = player.querySelector('[data-vce-video-player-controls="true"]');
        var controlsTimeout;
        var fullscreenPlay = player.querySelector('.vce-video-popup-fullscreen-play');
        var fullscreenPause = player.querySelector('.vce-video-popup-fullscreen-pause');

        fullscreenPlay && fullscreenPlay.addEventListener('click', function () {
          playVideo(video, player);
        });

        fullscreenPause && fullscreenPause.addEventListener('click', function () {
          pauseVideo(video, player);
        });

        controls && controls.addEventListener('mousemove', function () {
          showControls(controls);
          controlsTimeout && clearTimeout(controlsTimeout);
          controlsTimeout = timeoutHideControls(controls);
        });

        controls && controls.addEventListener('mouseleave', function () {
          hideControls(controls);
        });

        var play = controls && controls.querySelector('[data-vce-video-player-controls-play="true"]');
        var pause = controls && controls.querySelector('[data-vce-video-player-controls-pause="true"]');
        var timelineContainer = controls && controls.querySelector('.vce-video-popup-timeline-inner');
        var timeline = controls && controls.querySelector('[data-vce-video-player-timeline="true"]');
        var buffer = controls && controls.querySelector('[data-vce-video-player-timeline-buffer="true"]');
        var closeButton = player.querySelector('.vce-video-popup-close-button');

        play && play.addEventListener('click', function () {
          playVideo(video, player);
        });

        pause && pause.addEventListener('click', function () {
          pauseVideo(video, player);
        });

        closeButton && closeButton.addEventListener('click', function () {
          pauseVideo(video, player);
        });

        if (source === 'lib' || source === 'link') {
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

          if (!video.loop) {
            video.addEventListener('ended', function () {
              pauseVideo(video, player);
            });
          }
        }
      });
    }
  });
})()