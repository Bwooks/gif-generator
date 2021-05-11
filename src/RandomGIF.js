import React from 'react'
import useGif  from './hooks'

const RandomGIF = () => {
    const [ gifSrc, fetchGif ] = useGif()

    return (
        <div>
            <button onClick={fetchGif}>
                Random GIF
            </button>
            <img src={gifSrc} />
        </div>
    )
}

export default RandomGIF
