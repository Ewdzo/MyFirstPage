var mainImg = document.querySelectorAll('.rec-main-img img')
var mainVideo = document.querySelectorAll('.rec-main-img video')

function pause(i) { 
    mainVideo[i].pause() 
}

function play(i) { 
    mainVideo[i].play()
}
