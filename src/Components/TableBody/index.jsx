
function TableBody({datas, columns}) {
    return(
        <tbody>
            {datas.map((data, index) => (
                <tr key={`tbody-tr-${index}`}>
                    {columns.map(({label}, index) => (
                        <td key={`tbody-td-${index}`}>{data[label]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

export default TableBody