import { useState, useEffect } from "react"
import { useFilterTable } from "./useFilterTable"
import { useSortableTable } from "./useSortableTable"
//import { useGetObjectKeys } from "../../Hooks/useGetObjectKeys"

export const useTableEvents = (data) => {
    const [tableData, setTableData] = useState(data)
    const [tableFiltred, handleFilter] = useFilterTable(data)
    const [tableSorted, handleSorting] = useSortableTable(data)

    useEffect(() => {
        setTableData(tableFiltred)
    }, [tableFiltred])

    
    const handleTableEvent = (params) => {
        switch(params.name) {
            case "filter":
                handleFilter(params.filter)
                break
            case "sort":
                handleSorting(params.sortField, params.sortOrder)
                setTableData(tableSorted)
                break
            default:
        }
    }

    return [tableData, handleTableEvent]
} 