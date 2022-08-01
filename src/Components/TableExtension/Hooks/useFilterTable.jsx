import { useState } from "react"
//import { useGetObjectKeys } from "./useGetObjectKeys"

export const useFilterTable = (data) => {
    const [tableFiltred, setTableFiltred] = useState(data)
    //const [keys, setKeysObject] = useGetObjectKeys(data[0])

    const handleFilter = (filter) => {
        let filtered = null
        const keys = Object.keys(data[0])

        if (filter !== "") {
            filtered = [...tableFiltred].filter(element => keys.some((key) => element[key].toLowerCase().includes(filter.toLowerCase())))
        } else {
            filtered = data
        }

        setTableFiltred(filtered)
    }

    return [tableFiltred, handleFilter]
} 