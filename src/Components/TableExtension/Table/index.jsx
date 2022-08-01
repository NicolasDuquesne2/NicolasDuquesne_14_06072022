import { useTableEvents } from '../Hooks/useTableEvents'
import TableHeader from '../TableHeader'
import TableBody from '../TableBody'
import Filter from '../Filter'
import PaginationSelector from '../PaginationSelector'
import './table.css'

function Table({datas, columns}) {

    const [tableData, handleTableEvent] = useTableEvents(datas)
    let tableBody = null

    if (tableData.length > 0) {
        tableBody = <TableBody columns={columns} datas={tableData} />
    }


    return (
            <div className='table-frame'>
                <div className='table-frame-header'>
                    <PaginationSelector />
                    <Filter handleTableEvent={handleTableEvent}/>
                </div>
                <table className='table' >
                    <caption></caption>
                    <TableHeader columns={columns} handleTableEvent={handleTableEvent}/>
                    {tableBody}
                </table>
            </div>
    )
}

export default Table

// <TableHeader columns={columns}/>