import { saveToLs, loadFromLs } from './helpers';
import throttle from 'lodash.throttle';

const refs = {
  iframe: document.querySelector('#vimeo-player')
};

const player = new Vimeo.Player(refs.iframe);

function getCurrentTime() {
  return player.getCurrentTime();
}

const saveCurrentTimeToLS = throttle(function () {
  const currentTime = getCurrentTime();
  saveToLs('videoplayer-current-time', currentTime);
}, 1000); 

function loadVideoFromLS() {
  const storedTime = loadFromLs('videoplayer-current-time');

  if (storedTime !== null) {
    player.setCurrentTime(parseFloat(storedTime));
    player.play();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  player.on('loaded', function () {
    loadVideoFromLS();
  });

  player.on('timeupdate', function () {
    saveCurrentTimeToLS();
  });
});
