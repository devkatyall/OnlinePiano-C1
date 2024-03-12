window.addEventListener("keydown", function(e){
    const keys = document.querySelector(`audio[data-type="${e.keyCode}"]`);
    console.log(keys);
    keys.currentTime = 0;
    keys.play();

    const keysChange = document.querySelector(`div[data-type="${e.keyCode}"]`);
    keysChange.classList.add("active");
    setTimeout(function(){
        keysChange.classList.remove("active")
    },200);
});

const piano = document.querySelectorAll(".piano div");
piano.forEach((clicking)=> {clicking.addEventListener("click", function(){
    const playing = clicking.getAttribute("data-type");
    console.log(playing);
    const nowPlaying = document.querySelector(`audio[data-type="${playing}"]`);
    console.log(nowPlaying);
    nowPlaying.currentTime = 0;
    nowPlaying.play();
    clicking.classList.add("active");
    setTimeout(function(){
        clicking.classList.remove("active")
    },200);
})
});