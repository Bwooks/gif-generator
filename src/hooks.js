import React, { useState, useEffect } from 'react'

const GIPHY_API = 'https://api.giphy.com/v1/gifs/random'

const useGif = (tag) => {
    const [ gifSrc, setGifSrc ] = useState('')

    const fetchGif = async() => {
        const requestUrl = `${ GIPHY_API }?api_key=c3YjjBRaNeWU2j7LBUPV5BmPG1B6tsWN${tag ? `&tag=${tag}` : ''}`
        const response = await fetch(requestUrl)
        const gif = await response.json()

        setGifSrc(gif.data.image_url)
    }

    useEffect(() => {
        fetchGif()
    }, [ tag ])


    return [ gifSrc, fetchGif ]
}

export default useGif
