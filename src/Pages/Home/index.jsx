import React from "react"
import { useSelector } from "react-redux/es/exports"
import Form from "../../Components/Form"
import Header from "../../Components/Header"
import Footer from '../../Components/Footer'
import ModalForm from "../../Components/ModalForm"

/**
 * 
 * @module Home
 */


/**
 * Renders Home page
 * @returns {React.ReactComponentElement}
 */
function Home() {

    //const displayModal = useSelector(state => state.modal.value)
    return (
        <div className="background" id="main">
            <Header params={{title: "HRnet", link: {text: "View current employees", href: "/employees"}}} />
            <div className="container">
                <Form />
            </div>
            <Footer />
            <ModalForm params={{text: 'Employee Created'}}/>
        </div>
    )
}

export default Home