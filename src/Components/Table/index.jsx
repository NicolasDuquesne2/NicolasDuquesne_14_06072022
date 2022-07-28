import { useSortableTable } from '../../Hooks/useSortableTable'
import TableHeader from '../TableHeader'
import TableBody from '../TableBody'
import './table.css'

function Table({datas, columns}) {

    const [tableData, handleSorting] = useSortableTable(datas);
    
    return (
        tableData.length > 0 && (
            <table className='table' >
                <caption></caption>
                <TableHeader columns={columns} handleSorting={handleSorting}/>
                <TableBody columns={columns} datas={tableData} />
            </table>
        )
    )
}

export default Table

// <TableHeader columns={columns}/>