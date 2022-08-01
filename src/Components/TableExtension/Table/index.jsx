import { useTableEvents } from '../../Hooks/useTableEvents'
import TableHeader from '../TableHeader'
import TableBody from '../TableBody'
import Filter from './Filter'
import PaginationSelector from '../../PaginationSelector'
import './table.css'

function Table({datas, columns}) {

    const [tableData, handleTableEvent] = useTableEvents(datas)

    return (
        tableData.length > 0 && (
            <div className='table-frame'>
                <div className='table-frame-header'>
                    <PaginationSelector />
                    <Filter handleTableEvent={handleTableEvent}/>
                </div>
                <table className='table' >
                    <caption></caption>
                    <TableHeader columns={columns} handleTableEvent={handleTableEvent}/>
                    <TableBody columns={columns} datas={tableData} />
                </table>
            </div>
        )
    )
}

export default Table

// <TableHeader columns={columns}/>