import { useState } from "react"

export const useGetObjectKeys = (object) => {
    const [keys, setKeys] = useState([])

    setKeys(Object.keys(object))

    return [keys]
} 