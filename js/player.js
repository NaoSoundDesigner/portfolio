// Variables
var player,
		card  = document.querySelector( '.card' ),
		play  = document.querySelector( '.card-play' ),
		video = document.querySelector( '.card-video' );


// Youtube API
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}


// Player Ready
function onPlayerReady(event) {
	play.addEventListener( 'click', function() {
		card.classList.add( 'video-is-open' );
		setTimeout(function() {
			video.style.display = 'block';
			player.playVideo();
		}, 500);
	});
}


// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
