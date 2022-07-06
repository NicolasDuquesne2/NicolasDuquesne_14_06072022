import React from "react"
import Header from "../../Components/Header"

function Employees() {
    return (
        <React.Fragment>
            <Header params={{title: "HRnet", link: {text: "Home", href: "/"}}} />
            <div className="container">
                <h2 className="title">Current Employees</h2>
            </div>
        </React.Fragment>
    )
}

export default Employees