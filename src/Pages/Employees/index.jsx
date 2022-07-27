//@ts-no-check
import React from "react"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { update } from "../../Redux/Form/formSlice"
import Header from "../../Components/Header"
import Footer from '../../Components/Footer'
import Table from "../../Components/Table"


/**
 * 
 * @module ErrorPage
 */


/**
 * Renders the error page
 * @returns {React.ReactComponentElement}
 */
function Employees() {

    const dispatch = useDispatch()
    const datas = JSON.parse(localStorage.getItem('form'))
    dispatch(update(datas))
    const datasForm = useSelector(state => state.form.value)

    let columnsTitles = null
    let columns = []

    if (datas.length > 0) {
        columnsTitles = Object.keys(datas[0])
        columnsTitles.map((column) => (columns.push({label:column, sortable: true})))
    }

    return (
        <div className="background">
            <Header params={{title: "HRnet", link: {text: "Home", href: "/"}}} />
            <div className="container">
                <h2 className="title">Current Employees</h2>
            </div>
            <Table datas={datasForm} columns={columns}/>
            <Footer />
        </div>
    )
}

export default Employees

//  />