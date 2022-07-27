import { useSelector, useDispatch } from "react-redux/es/exports"
import { setOrder } from "../../Redux/Table/orderSlice"
import { setField } from "../../Redux/Table/fieldSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

function TableHeader({columns}) {

    const sortField = useSelector(state => state.field.value)
    const order = useSelector(state => state.order.value)
    const dispatch = useDispatch()

    const handleSortingChange = (label) => {
        const switchOrder = label === sortField && order === "asc" ? "desc": "asc"
        dispatch(setField(label))
        dispatch(setOrder(switchOrder))
    }

    return (
        <thead>
            <tr>
                {columns.map(({label, sortable}, index) => {

                const cl = sortable
                    ? sortField === label && order === "asc"
                        ? "up"
                        : sortField === label && order === "desc"
                        ? "down"
                        : "default"
                    : ""
                
                return (
                    <th key={`theader-th-${index}`} 
                        onClick={sortable ? () => handleSortingChange(label): null}
                        className={cl}>
                        {label}
                    </th>
                )

                    
            })}
            </tr>
        </thead>
    )

}

export default TableHeader