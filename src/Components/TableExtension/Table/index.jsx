import { useState } from 'react'
import { useTableEvents } from '../Hooks/useTableEvents'
import TableHeader from '../TableHeader'
import TableBody from '../TableBody'
import Pagination from '../Pagination'
import Filter from '../Filter'
import PaginationSelector from '../PaginationSelector'
import './table.css'

function Table({datas, columns}) {

    const [tableData, handleTableEvent] = useTableEvents(datas)
    const [currentPageIndex, setCurrentPageIndex] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [totalRows] = useState(datas.length)
    let tableBody = null

    //get current table lines

    const indexOfLastRow = currentPageIndex * rowsPerPage
    const indexOfFirstRow = indexOfLastRow - rowsPerPage
    const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow)

    if (tableData.length > 0) {

        tableBody = <TableBody columns={columns} datas={currentRows} />
    }

    const paginate = (pageNumber) => setCurrentPageIndex(pageNumber)


    const setRowsNumber = (rowsNumber) => {
        setRowsPerPage(rowsNumber)
        paginate(1)
    }

    return (
            <div className='table-frame'>
                <div className='table-frame-header'>
                    <PaginationSelector setRowsNumber={setRowsNumber} />
                    <Filter handleTableEvent={handleTableEvent} />
                </div>
                <table className='table' >
                    <caption></caption>
                    <TableHeader columns={columns} handleTableEvent={handleTableEvent}/>
                    {tableBody}
                </table>
                <Pagination 
                    rowsPerPage={rowsPerPage} 
                    totalRows={totalRows} 
                    indexOfFirstRow={indexOfFirstRow} 
                    indexOfLastRow={indexOfLastRow} 
                    paginate={paginate}
                />
            </div>
    )
}

export default Table

// <TableHeader columns={columns}/>