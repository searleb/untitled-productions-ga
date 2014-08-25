$(document).ready(function(){
	$('#audioControl').click(function(){
	var audioplayer = document.getElementById('audio-player');
    if (audioplayer.paused) {
       audioplayer.play();
    }   
    else {
       audioplayer.pause();
    }
	$(this).toggleClass('audioIconOn')
});
	audioplayer = document.getElementById('audio-player');
	$('.fancybox-media').click(function(){
		if (audioplayer.paused) {
			audioplayer.pause();
    }   
    else {
       audioplayer.pause();
    }
	$('#audioControl').toggleClass('audioIconOn')
	});
})