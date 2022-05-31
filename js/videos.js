var mainImg = document.querySelectorAll('.rec-main-img img')
var mainVideo = document.querySelectorAll('.rec-main-img video')

function pause(i) { 
    mainVideo[i].pause() 
}

function play(i) { 
    mainVideo[i].play()
}

mainImg[0].onmouseover = function() { play(0) };
mainImg[0].onmouseout = function() { pause(0) };

mainImg[1].onmouseover = function() { play(1) };
mainImg[1].onmouseout = function() { pause(1) };

mainImg[2].onmouseover = function() { play(2) };
mainImg[2].onmouseout = function() { pause(2) };

mainImg[3].onmouseover = function() { play(3) };
mainImg[3].onmouseout = function() { pause(3) };

mainImg[4].onmouseover = function() { play(4) };
mainImg[4].onmouseout = function() { pause(4) };