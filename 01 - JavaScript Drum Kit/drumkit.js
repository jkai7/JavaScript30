


function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio)
    console.log(key)
    if(!audio) return; //stop function if no audio
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  };

function removeTransition(e){
    // console.log(e);
    if(e.propertyName !== 'transform') return; //skips if not transform
    console.log(e.propertyName);
    this.classList.remove('playing');
}

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);