import {useEffect, useRef } from 'react'

import './pagination.css'

function Pagination({pageNumber, rowsPerPage, totalRows, firstRowNumber, lastRowNumber, paginate, changePageNumber, addToRefs, highlightButton, disHighlightButton}) {

    const nextButtonRef = useRef(null)
    const previousButtonRef = useRef(null)
    const totalPages = Math.ceil(totalRows/rowsPerPage)
    const pageNumbersArr = []

    for(let i = 1; i <= totalPages; i++) {
        pageNumbersArr.push(i)
    }


    const onPageButton = (e, number) => {
        disHighlightButton(pageNumber)
        changePageNumber(number)
        paginate(number)
    }

    const onSideButton = (e) => {

        const sideButton = e.target
        let localPageNumber = null

        switch(sideButton.id) {
            case 'previous':
                if(pageNumber > 1) {
                    localPageNumber = pageNumber -1
                }
                break
            case 'next':
                if(pageNumber < totalPages) {
                    localPageNumber = pageNumber + 1
                }
                break
            default:
        }

        if(localPageNumber) {
            
            disHighlightButton(pageNumber)
            changePageNumber(localPageNumber)
            paginate(localPageNumber)
        }
    }

    useEffect(() => {
        highlightButton(pageNumber)
        pageNumber > 1? previousButtonRef.current.disabled = false: previousButtonRef.current.disabled = true
        pageNumber < totalPages?  nextButtonRef.current.disabled = false: nextButtonRef.current.disabled = true
        
        if(totalPages === 1) {
            nextButtonRef.current.disabled = true
            previousButtonRef.current.disabled = true
        }

    }, [pageNumber, totalPages])

    return(
        <section className='pagination-wrapper'>
            <p className='entries-info'>{`Showing ${firstRowNumber} to ${lastRowNumber} of ${totalRows} entries`}</p>
            <div className='pagination-wrapper'>
                <nav className="pagination-nav">
                    <ul className="pagination" id="pagList">
                        <li>
                            <button className='sideButton' id="previous"  ref={previousButtonRef} onClick={(e) => onSideButton(e)}>Previous</button>
                        </li>
                        {pageNumbersArr.map((pnumber) => {
                            return(
                                <li key={`page-number${pnumber}`} >
                                    <button
                                        ref={addToRefs} 
                                        onClick={(e) => onPageButton(e, pnumber)} 
                                        className="page-button"
                                        id={`button-${pnumber}`}>
                                        {pnumber}
                                    </button>
                                </li>
                            )
                        })}
                        <li>
                            <button className='sideButton' id="next" ref={nextButtonRef} onClick={(e) => onSideButton(e)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Pagination