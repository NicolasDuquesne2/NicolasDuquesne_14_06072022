import TableHeader from '../TableHeader'
import TableBody from '../TableBody'
import './table.css'

function Table({datas, columns}) {
    console.log(datas)
    return (
        datas.length > 0 && (
            <table className='table' >
                <caption></caption>
                <TableHeader columns={columns}/>
                <TableBody columns={columns} datas={datas} />
            </table>
        )
    )
}

export default Table

// <TableHeader columns={columns}/>