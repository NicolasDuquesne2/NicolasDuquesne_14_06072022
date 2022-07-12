import React from "react"
import Header from "../../Components/Header"
import Footer from '../../Components/Footer'

function Employees() {
    return (
        <div className="background">
            <Header params={{title: "HRnet", link: {text: "Home", href: "/"}}} />
            <div className="container">
                <h2 className="title">Current Employees</h2>
            </div>
            <Footer />
        </div>
    )
}

export default Employees