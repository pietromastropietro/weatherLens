import { useEffect, useState } from 'react'

const useImage = (fileName) => {
    const [error, setError] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`static/images/${fileName}.svg`)
                setImage(response.default)
            } catch (err) {
                setError(err)
            }
        }
        fetchImage()
    }, [fileName])

    return { error, image }
}

export default useImage