
function Filter({handleTableEvent}) {

    const handleOnChange = (e) => {
        const fieldValue = e.target.value
        handleTableEvent({name: "filter", filter: fieldValue})
    }

    return (
        <form id="filter-form">
             <input type="search" id="filter-search" onChange={handleOnChange}/>
        </form>
    )  
}

export default Filter