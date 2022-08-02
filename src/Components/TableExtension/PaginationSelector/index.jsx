import SelectMenu from "../SelectMenu";

function PaginationSelector({setRowsNumber}) {

    const pagesNumbers = ["10", "25", "50", "100"]

    return (
        <select name="pagination" id="pagination" onChange={(e) => setRowsNumber(Number(e.target.options[e.target.selectedIndex].text))}>
            <SelectMenu params={{keyPart: 'option-pag-', datas: pagesNumbers, typeOfDatas: 'array'}}/>
        </select>
    )
}

export default PaginationSelector