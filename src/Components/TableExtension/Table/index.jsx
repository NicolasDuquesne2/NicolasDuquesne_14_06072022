import { useState, useRef, useEffect } from 'react'
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
    const [totalRows, setTotalRows] = useState(tableData.length)
    const [pageNumber, setPageNumber] = useState(1)
    const numberButtonsRef = useRef([])

    let tableBody = null

    //get current table lines

    const indexOfLastRow = currentPageIndex * rowsPerPage
    const indexOfFirstRow = indexOfLastRow - rowsPerPage
    const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow)
    const firstRowNumber = indexOfFirstRow + 1
    const lastRowNumber = firstRowNumber + currentRows.length -1

    if (tableData.length > 0) {
        console.log(totalRows)
        tableBody = <TableBody columns={columns} datas={currentRows} />
    }

    const paginate = (pageNumber) => setCurrentPageIndex(pageNumber)

    const changePageNumber = (pageNumber) => {
        setPageNumber(pageNumber)
    } 

    const setRowsNumber = (rowsNumber) => {
        disHighlightButton(pageNumber)
        numberButtonsRef.current = []
        setRowsPerPage(rowsNumber)
        paginate(1)
        changePageNumber(1)
    }

    const addToRefs = (element) => {
        if(element && !numberButtonsRef.current.includes(element)) {
            numberButtonsRef.current.push(element)
        }
    }

    const highlightButton = (pageNumber) => {
        const indexPageNumber = pageNumber -1
        numberButtonsRef.current[indexPageNumber].classList.add('highlighted')
        numberButtonsRef.current[indexPageNumber].classList.remove('page-button')
    }

    const disHighlightButton = (pageNumber) => {
        const indexPageNumber = pageNumber -1
        numberButtonsRef.current[indexPageNumber].classList.add('page-button')
        numberButtonsRef.current[indexPageNumber].classList.remove('highlighted')
    }

    useEffect(() => {
        setTotalRows(tableData.length)
    }, [tableData])

    return (
            <div className='table-frame'>
                <div className='table-frame-header'>
                    <PaginationSelector setRowsNumber={setRowsNumber} />
                    <Filter handleTableEvent={handleTableEvent} />
                </div>
                <table className='table' >
                    <TableHeader columns={columns} handleTableEvent={handleTableEvent}/>
                    {tableBody}
                </table>
                <Pagination
                    pageNumber={pageNumber}
                    numberButtonsRef={numberButtonsRef}
                    rowsPerPage={rowsPerPage} 
                    totalRows={totalRows} 
                    firstRowNumber={firstRowNumber} 
                    lastRowNumber={lastRowNumber} 
                    paginate={paginate}
                    changePageNumber={changePageNumber}
                    addToRefs={addToRefs}
                    highlightButton={highlightButton}
                    disHighlightButton={disHighlightButton}
                />
            </div>
    )
}

export default Table

// <TableHeader columns={columns}/>