function playSound(audio, key){
 
    if(!audio) return

    key.classList.add('playing')
    audio.currentTime = 0
    
    audio.play()
}

function playSoundByKeys(e){
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)
    const key = document.querySelector(`.key[data-key="${e.key}"]`)   

    // console.log(e.key);
    // console.log(audio)

    playSound(audio, key)
}



function playSoundByMouse(e){
    // console.log(e.target.nodeName)
    const mouseParent = e.target.parentElement
    // console.log(mouseParent)
    // console.log(mouseParent.dataset.key)

    const audio = document.querySelector(`audio[data-key="${mouseParent.dataset.key}"]`)
    const key = document.querySelector(`.key[data-key="${mouseParent.dataset.key}"]`)


    playSound(audio, key)
    
}


function removeTransition(e){
     // console.log(e);
    //會print出六個事件，六種不同 propertyName 代表transition所影響的CSS參數
    //選擇propertyName 是transform的

    if(e.propertyName !== 'transform') return

    // console.log(this)
    e.target.classList.remove('playing')
}




window.addEventListener('keydown', playSoundByKeys)

const keysArea = document.querySelector('.keys')
keysArea.addEventListener('click', playSoundByMouse)

const keys = document.querySelectorAll('.key')
keys.forEach( (key) => key.addEventListener('transitionend', removeTransition))


