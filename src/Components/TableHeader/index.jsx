import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

function TableHeader({columns}) {

    return (
        <thead>
            <tr>
                {columns.map(({label, sortable}, index) => (
                    <th key={`theader-th-${index}`}>{label}</th>
                ))}
            </tr>
        </thead>
    )

}

export default TableHeader