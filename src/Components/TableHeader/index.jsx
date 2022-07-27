import { useSelector, useDispatch } from "react-redux/es/exports"
import { setOrder } from "../../Redux/Table/orderSlice"
import { setField } from "../../Redux/Table/fieldSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

function TableHeader({columns}) {

    const sortField = useSelector(state => state.field.value)
    const order = useSelector(state => state.order.value)
    const dispatch = useDispatch()
    let className = ""
    let icon = null

    const handleSortingChange = (label) => {
        const switchOrder = label === sortField && order === "asc" ? "desc": "asc"
        dispatch(setField(label))
        dispatch(setOrder(switchOrder))
    }

    return (
        <thead>
            <tr>
                {columns.map(({label, sortable}, index) => {

                    

                    if (sortable) {
                        if ( sortField === label && order === "asc") {
                            className = "desc"
                            icon = <FontAwesomeIcon icon= {faSortUp} />
                        } else if (sortField === label && order === "desc") {
                            className = "desc"
                            icon = <FontAwesomeIcon icon= {faSortDown} />
                        } else {
                            className = "default"
                            icon = <FontAwesomeIcon icon= {faSort} />
                        }
                    } else {
                        className = ""
                    }

                    
                return (
                    <th key={`theader-th-${index}`} 
                        onClick={sortable ? () => handleSortingChange(label): null}
                        className={className}>
                        {label}<span> {icon}</span>
                    </th>
                )

                    
            })}
            </tr>
        </thead>
    )

}

export default TableHeader