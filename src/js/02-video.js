import { saveToLs, loadFromLs } from './helpers';

const refs = {
   iframe: document.querySelector('#vimeo-player')
 
}
 const player = new Vimeo.Player(refs.iframe);

function getCurrentTime() {
    return player.getCurrentTime();
}

const currentTime = getCurrentTime();
saveToLs('videoplayer-current-time', currentTime);


player.on('timeupdate', function (data) {

});

