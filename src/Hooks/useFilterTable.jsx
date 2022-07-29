import { useState } from "react"
//import { useGetObjectKeys } from "../../Hooks/useGetObjectKeys"

export const useFilterTable = (data) => {
    const [tableFiltred, setTableFiltred] = useState(data)

    const handleFilter = (filter) => {
        const filtered = [...tableFiltred].filter(element => element.firstname.toLowerCase().includes(filter.toLowerCase()))
        setTableFiltred(filtered)
    }

    return [tableFiltred, handleFilter]
} 