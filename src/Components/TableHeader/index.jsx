import { useSelector, useDispatch } from "react-redux/es/exports"
import { setOrder } from "../../Redux/Table/orderSlice"
import { setField } from "../../Redux/Table/fieldSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import "./tableheader.css"

function TableHeader({columns, handleTableEvent}) {

    const sortField = useSelector(state => state.field.value)
    const order = useSelector(state => state.order.value)
    const dispatch = useDispatch()

    let icon = null

    const handleSortingChange = (accessor) => {
        const switchOrder = accessor === sortField && order === "asc" ? "desc": "asc"
        dispatch(setField(accessor))
        dispatch(setOrder(switchOrder))
        handleTableEvent({name: "sort", sortField: accessor, sortOrder: switchOrder})
    }

    return (
        <thead>
            <tr>
                {columns.map(({label, accessor, sortable}, index) => {

                    

                    if (sortable) {
                        if ( sortField === accessor && order === "asc") {
                            icon = <span className="arrow-black"> <FontAwesomeIcon icon= {faSortUp} /></span>
                        } else if (sortField === accessor && order === "desc") {
                            icon = <span className="arrow-black"><FontAwesomeIcon icon= {faSortDown} /></span>
                        } else {
                            icon = <span className="arrow-grey"><FontAwesomeIcon icon= {faSort} /></span>
                        }
                    } else {
                        icon = null
                    }

                    
                return (
                    <th key={`theader-th-${index}`} 
                        onClick={sortable ? () => handleSortingChange(accessor): null}>
                        {label} {icon}
                    </th>
                )

                    
            })}
            </tr>
        </thead>
    )

}

export default TableHeader