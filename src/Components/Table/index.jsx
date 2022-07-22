import React, {useEffect} from 'react'
import './table.css'

function Table({datas}) {
    let headers = null

    if (datas.length > 0) {
        headers = Object.keys(datas[0])
        console.log(headers)        
    }

    return (
        datas.length > 0 && (
            <table className='table' >
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={`theader-th-${index}`}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data, index) => (
                        <tr key={`tbody-tr-${index}`}>
                            {headers.map((attr, index) => (
                                <td key={`tbody-td-${index}`}>{data[attr]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    )
}

export default Table