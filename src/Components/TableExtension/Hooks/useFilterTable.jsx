import { useState } from "react"
//import { useGetObjectKeys } from "../../Hooks/useGetObjectKeys"

export const useFilterTable = (data) => {
    const [tableFiltred, setTableFiltred] = useState(data)

    const handleFilter = (filter) => {
        let filtered = null

        if (filter !== "") {
            filtered = [...tableFiltred].filter(element => element.firstname.toLowerCase().includes(filter.toLowerCase()))
        } else {
            filtered = data
        }

        setTableFiltred(filtered)
    }

    return [tableFiltred, handleFilter]
} 