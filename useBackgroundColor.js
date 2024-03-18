import { useState, useEffect } from "react"
function getSavedBackgroundColor(key, initialValue) {
    const SavedBackgroundColor = JSON.parse(localStorage.getItem(key))

    if (SavedBackgroundColor) return SavedBackgroundColor

    if (initialValue) return initialValue
}


function useBackgroundColor(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedBackgroundColor(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value, setValue]
}
export default useBackgroundColor