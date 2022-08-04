import { useState, useEffect, useRef } from 'react'
import './pagination.css'

function Pagination({ rowsPerPage, totalRows, indexOfFirstRow, indexOfLastRow, paginate }) {
    const pageNumbers = []
    const [clickedButton, setClickedButton] = useState(null)
    const currentButton = useRef(null)

    for(let i = 1; i <= Math.ceil(totalRows/rowsPerPage); i++) {
        pageNumbers.push(i)
    }



    const onPageButton = (e, number) => {

        if(clickedButton) {
            clickedButton.classList.remove('highlighted')
            clickedButton.classList.add('page-button')
        }

        console.log(e.target.innerText)
        e.target.classList.add('highlighted')
        e.target.classList.remove('page-button')
        setClickedButton(e.target)
        paginate(number)
    }


    const onSideButton = (e) => {
        const sideButton = e.target

        switch(sideButton.id) {
            case 'previous':
                console.log('previous')
                console.log(clickedButton.innerText)
                break
            case 'next':
                console.log('next')
                break
            default:
        }

    }

    useEffect(() => {
        setClickedButton(document.getElementById("button-1"))
    }, [])

    return(
        <section className='pagination-wrapper'>
            <p className='entries-info'>{`Showing ${indexOfFirstRow + 1} to ${indexOfLastRow } of ${totalRows} entries`}</p>
            <div className='pagination-wrapper'>
                <nav className="pagination-nav">
                    <ul className="pagination" id="pagList">
                        <li>
                            <button className='sideButton' id="previous" onClick={(e) => onSideButton(e)}>Previous</button>
                        </li>
                        {pageNumbers.map((number) => {
                            let clName = ""
                            number === 1? clName="highlighted": clName="page-button"

                           return( 
                                <li key={`page-number${number}`} >
                                    <button onClick={(e) => onPageButton(e, number)} className={clName} id={`button-${number}`}>
                                        {number}
                                    </button>
                                </li>
                            )
                        })}
                        <li>
                            <button className='sideButton' id="next" onClick={(e) => onSideButton(e)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Pagination