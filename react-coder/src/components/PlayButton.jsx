import React from 'react'

const PlayButton = ({message, children, onClick, onPlay, onPause}) => {
    let playing = false;
    function handleClick(){
        if (playing) onPause()
        else onPlay();

        playing = !playing;
    }
    return (
        <button onClick={handleClick}>{children} : {playing ? '>' :'||'}</button>
    )
}

export default PlayButton