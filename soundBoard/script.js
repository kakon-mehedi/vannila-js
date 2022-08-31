const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']


sounds.forEach((sound)=>{
    const btn = document.createElement("button")
    btn.classList.add('btn')
    btn.innerHTML = sound

    document.getElementById('buttons').appendChild(btn)

    btn.addEventListener('click', () => {
        stopPlayPreviousSound()
        audio = document.getElementById(sound)
        audio.play()       
    } )


})

function stopPlayPreviousSound(){
    sounds.forEach(sound => {
       audio = document.getElementById(sound)
       audio.pause()
       audio.currentTime = 0
    });
}