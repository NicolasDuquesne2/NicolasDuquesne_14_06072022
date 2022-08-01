import { useState } from "react"

export const useGetObjectKeys = (object) => {
    const [keys, setKeys] = useState(object)

    const setKeysObject = () => {
        setKeys(Object.keys(object))
    }

    console.log(keys)
    return [keys, setKeysObject]
} 