import { saveToLs, loadFromLs } from './helpers';
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const refs = {
  iframe: document.querySelector('#vimeo-player')
};

const player = new Player(refs.iframe);

function loadVideoFromLS() {
  const storedTime = loadFromLs('videoplayer-current-time');

  if (storedTime !== null) {
    player.setCurrentTime(parseFloat(storedTime));
  }
}

loadVideoFromLS();

  player.on('timeupdate', throttle(function ({seconds}) {
  saveToLs('videoplayer-current-time', seconds);
}, 1000));

