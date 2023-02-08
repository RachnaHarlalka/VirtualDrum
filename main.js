window.addEventListener("keydown",(e)=>{
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime =0;//it allows the music to play continuously.if we dont give this, even if we press the key multiple times, the music will complete its execution once then only it will play again
    audio.play();
    key.classList.add('playing');

    function removeTransition(e){
        if(e.propertyName!=='transform') return;
        key.classList.remove('playing');
    }
    
    const keys = document.querySelectorAll('.key');
    console.log(keys);
    keys.forEach(key => key.addEventListener('transitionend',removeTransition));
    
})



