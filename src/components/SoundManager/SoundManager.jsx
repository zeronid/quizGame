import React from 'react'
import Sound from 'react-sound'

function SoundManager({ soundEffect, loop }) {

    return (
        <Sound
            url={soundEffect}
            playStatus={Sound.status.PLAYING}
            playFromPosition={0}
            loop={loop}
        />
    )
}

export default SoundManager