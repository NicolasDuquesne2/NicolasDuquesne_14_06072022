//@ts-no-check
import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { setForm } from "../../Redux/Form/action"
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

    const datasForm = useSelector(state => state.FormReducer.data)
    const dispatch = useDispatch()

    useEffect(() => {
        const datas = JSON.parse(localStorage.getItem('form'))
        dispatch(setForm(datas))
    }, [])

    return (
        <div className="background">
            <Header params={{title: "HRnet", link: {text: "Home", href: "/"}}} />
            <div className="container">
                <h2 className="title">Current Employees</h2>
            </div>
            <Table datas={datasForm} />
            <Footer />
        </div>
    )
}

export default Employees