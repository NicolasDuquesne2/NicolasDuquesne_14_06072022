import { useState, useEffect, useRef } from 'react'
import './pagination.css'

function Pagination({ rowsPerPage, totalRows, indexOfFirstRow, indexOfLastRow, paginate }) {
    
    const nextButtonRef = useRef(null)
    const previousButtonRef = useRef(null)
    const numberButtonsRef = useRef([])
    const totalPages = Math.ceil(totalRows/rowsPerPage)
    const pageNumbersArr = []
    const [clickedButton, setClickedButton] = useState(null)

    console.log(clickedButton)

    for(let i = 1; i <= totalPages; i++) {
        pageNumbersArr.push(i)
    }

    const onPageButton = (e, number) => {

        if(clickedButton) {
            clickedButton.classList.remove('highlighted')
            clickedButton.classList.add('page-button')
        }

        number > 1? previousButtonRef.current.disabled = false: previousButtonRef.current.disabled = true
        number < totalPages?  nextButtonRef.current.disabled = false: nextButtonRef.current.disabled = true

        e.target.classList.add('highlighted')
        e.target.classList.remove('page-button')
        setClickedButton(e.target)
        paginate(number)
    }

    const onSideButton = (e) => {
        const sideButton = e.target
        const number = Number(clickedButton.innerText)
        const arrayIndex = number -1
        let newButton = null

        switch(sideButton.id) {
            case 'previous':
                if (arrayIndex > 0) {
                    number - 1 === 1? previousButtonRef.current.disabled = true: previousButtonRef.current.disabled = false
                    number + 1 === totalPages? nextButtonRef.current.disabled = true: nextButtonRef.current.disabled = false
                    clickedButton.classList.remove('highlighted')
                    clickedButton.classList.add('page-button')
                    newButton = numberButtonsRef.current[arrayIndex-1]
                    newButton.classList.add('highlighted')
                    newButton.classList.remove('page-button')
                    setClickedButton(newButton)
                    paginate(number - 1)
                }
                break
            case 'next':
                if(arrayIndex < totalPages-1) {
                    number -1 === 1? previousButtonRef.current.disabled = true: previousButtonRef.current.disabled = false
                    number + 1 === totalPages? nextButtonRef.current.disabled = true: nextButtonRef.current.disabled = false
                    clickedButton.classList.remove('highlighted')
                    clickedButton.classList.add('page-button')
                    newButton = numberButtonsRef.current[arrayIndex+1]
                    newButton.classList.add('highlighted')
                    newButton.classList.remove('page-button')
                    setClickedButton(newButton)
                    paginate(number + 1)
                }
                break
            default:
        }

    }

    useEffect(() => {
        setClickedButton(numberButtonsRef.current[0])
        previousButtonRef.current.disabled = true
    }, [])

    return(
        <section className='pagination-wrapper'>
            <p className='entries-info'>{`Showing ${indexOfFirstRow + 1} to ${indexOfLastRow } of ${totalRows} entries`}</p>
            <div className='pagination-wrapper'>
                <nav className="pagination-nav">
                    <ul className="pagination" id="pagList">
                        <li>
                            <button className='sideButton' id="previous"  ref={previousButtonRef} onClick={(e) => onSideButton(e)}>Previous</button>
                        </li>
                        {pageNumbersArr.map((number) => {
                            let clName = ""
                            number === 1? clName="highlighted": clName="page-button"

                            return(
                                <li key={`page-number${number}`} >
                                    <button
                                        ref={(element) => numberButtonsRef.current.push(element)} 
                                        onClick={(e) => onPageButton(e, number)} 
                                        className={clName} 
                                        id={`button-${number}`}>
                                        {number}
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