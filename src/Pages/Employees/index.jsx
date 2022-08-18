//@ts-no-check
import React from "react"
import { useDispatch } from "react-redux/es/exports"
import { update } from "../../Redux/Form/formSlice"
import Header from "../../Components/Header"
import Footer from '../../Components/Footer'
import Table from "../../Components/TableExtension/Table"
import { dataMoke } from "../../Params/dataMoke"
import "./employees.css"


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
    let table = null

    let columnsAccessors = null
    const columnsLabels = ["First name", " Last name", "Start Date", "Department", "Date of Birth", "Street", "City", "State", "Zip Code"]
    let columns = []


    if (datas != null && datas.length > 0) {
        columnsAccessors = Object.keys(datas[0])
        columnsAccessors.map((accessor, index) => (columns.push({label:columnsLabels[index], accessor, sortable: true})))
        table = <Table datas={dataMoke} columns={columns} />
    } else {
        table = <p className="errMessage">No data to show</p>
    }

    return (
        <div className="background">
            <Header params={{title: "HRnet", link: {text: "Home", href: "/"}}} />
            <div className="container">
                <h2 className="title">Current Employees</h2>
                {table}
            </div>
            <Footer />
        </div>
    )
}

export default Employees

//  />