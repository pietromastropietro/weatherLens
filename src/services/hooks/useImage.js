import { useEffect, useState } from 'react'

const useImage = (fileName) => {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`static/images/weather/${fileName}.png`)
                setImage(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchImage()
    }, [fileName])

    return { image, loading, error }
}

export default useImage