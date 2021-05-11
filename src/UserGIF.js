import React, { useState, useEffect } from 'react'
import useGif from './hooks'

const UserGif = () => {
    const [ tag, setGifTag ] = useState('dog')
    const [ gifSrc, fetchGif ] = useGif(tag)

    return (
        <>
            <div>
                <input type={'text'} value={tag} onChange={(e) => setGifTag(e.target.value)}/>
                <button onClick={fetchGif}>Get GIF</button>
            </div>
            <img src={gifSrc}/>
        </>
    )
}

export default UserGif
