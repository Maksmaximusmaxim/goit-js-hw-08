import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate',throttle((e)=>{ localStorage.setItem(`videoplayer-current-time`, e.seconds)},1000 ));
const filterCurrentTime = localStorage.getItem(`videoplayer-current-time`) ? localStorage.getItem(`videoplayer-current-time`) : 0;
player.setCurrentTime(filterCurrentTime);
