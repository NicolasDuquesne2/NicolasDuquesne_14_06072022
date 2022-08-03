import { useState } from 'react'
import './pagination.css'

function Pagination({ rowsPerPage, totalRows, indexOfFirstRow, indexOfLastRow, paginate }) {
    const pageNumbers = []
    const [clickedButton, setClickedButton] = useState(null)

    for(let i = 1; i <= Math.ceil(totalRows/rowsPerPage); i++) {
        pageNumbers.push(i)
    }


    const onPageButton = (e, number) => {

        if(clickedButton) {
            clickedButton.classList.remove('highlighted')
            clickedButton.classList.add('page-button')
        }

        e.target.classList.add('highlighted')
        e.target.classList.remove('page-button')
        setClickedButton(e.target)
        paginate(number)
    }

    return(
        <section className='pagination-wrapper'>
            <p className='entries-info'>{`Showing ${indexOfFirstRow + 1} to ${indexOfLastRow } of ${totalRows} entries`}</p>
            <div className='pagination-wrapper'>
                <p className='pagination-sidetext'>Previous</p>
                <nav className="pagination-nav">
                    <ul className="pagination">
                        {pageNumbers.map((number) => (
                            <li key={`page-number${number}`} className="page-item">
                                <button onClick={(e) => onPageButton(e, number)} className="page-button">
                                    {number}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                <p className='pagination-sidetext'>Next</p>
            </div>
        </section>
    )
}

export default Pagination