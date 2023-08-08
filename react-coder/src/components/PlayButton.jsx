import React from 'react'
import { useState } from 'react';

const PlayButton = ({message, children, onClick, onPlay, onPause}) => {
    const [playing, setPlaying] = useState(false);
    function handleClick(){
        if (playing) onPause()
        else onPlay(); 

        setPlaying(!playing);
    }
    return (
        <button onClick={handleClick}>{children} : {playing ? '⏸️' : '▶️'}</button>
    )
}

export default PlayButton