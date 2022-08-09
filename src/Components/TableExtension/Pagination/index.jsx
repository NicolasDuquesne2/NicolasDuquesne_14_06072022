import { useState, useEffect, useRef } from 'react'
import './pagination.css'

function Pagination({ rowsPerPage, totalRows, indexOfFirstRow, indexOfLastRow, paginate }) {
    
    const nextButtonRef = useRef(null)
    const previousButtonRef = useRef(null)
    const numberButtonsRef = useRef([])
    const totalPages = Math.ceil(totalRows/rowsPerPage)
    const pageNumbersArr = []
    const [pageNumber, setPageNumber] = useState(1)

    for(let i = 1; i <= totalPages; i++) {
        pageNumbersArr.push(i)
    }

    const addToRefs = (element) => {
        if(element && !numberButtonsRef.current.includes(element)) {
            numberButtonsRef.current.push(element)
        }
    }

    const onPageButton = (e, number) => {
        const indexPageNumber = pageNumber -1 
        numberButtonsRef.current[indexPageNumber].classList.add('page-button')
        numberButtonsRef.current[indexPageNumber].classList.remove('highlighted')
        setPageNumber(number)
        paginate(number)
    }

    const onSideButton = (e) => {

        const sideButton = e.target
        const indexPageNumber = pageNumber -1
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
            numberButtonsRef.current[indexPageNumber].classList.add('page-button')
            numberButtonsRef.current[indexPageNumber].classList.remove('highlighted')
            setPageNumber(localPageNumber)
            paginate(localPageNumber)
        }
    }

    useEffect(() => {
        const indexPageNumber = pageNumber -1
        numberButtonsRef.current[indexPageNumber].classList.add('highlighted')
        numberButtonsRef.current[indexPageNumber].classList.remove('page-button')
        pageNumber > 1? previousButtonRef.current.disabled = false: previousButtonRef.current.disabled = true
        pageNumber < totalPages?  nextButtonRef.current.disabled = false: nextButtonRef.current.disabled = true
        
        if(totalPages === 1) {
            nextButtonRef.current.disabled = true
            previousButtonRef.current.disabled = true
        }

    }, [pageNumber, totalPages])

    return(
        <section className='pagination-wrapper'>
            <p className='entries-info'>{`Showing ${indexOfFirstRow + 1} to ${indexOfLastRow } of ${totalRows} entries`}</p>
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