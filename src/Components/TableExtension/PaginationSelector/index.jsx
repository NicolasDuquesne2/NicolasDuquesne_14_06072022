import SelectMenu from "../SelectMenu";

function PaginationSelector() {

    const pagesNumbers = ["10", "25", "50", "100"]

    return (
        <select name="pagination" id="pagination" >
            <SelectMenu params={{keyPart: 'option-pag-', datas: pagesNumbers, typeOfDatas: 'array'}} />
        </select>
    )
}

export default PaginationSelector