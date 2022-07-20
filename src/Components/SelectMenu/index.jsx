
function SelectMenu({params}) {

    console.log(params)
    const optionKind = params.keyPart
    const datas = params.datas
    const typeOfDatas = params.typeOfDatas
    const dataAttribute = params.dataAttr
    console.log(optionKind)
    console.log(datas)
    console.log(typeOfDatas)
    console.log(typeOfDatas)
    

    switch(typeOfDatas) {
        case 'array':
            return (
                datas.map((data, index) => { return <option key={`${optionKind}${index}`}>{data}</option>})
            )
        case 'object':
            return (
                datas.map((data, index) => { return <option key={`${optionKind}${index}`}>{data[dataAttribute]}</option>})
            )
        default:
                   
    }
}

export default SelectMenu