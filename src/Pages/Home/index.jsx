import React from "react"
import Form from "../../Components/Form"
import Header from "../../Components/Header"

function Home() {
    return (

        <React.Fragment>
            <Header params={{title: "HRnet", link: {text: "View current employees", href: "/employees"}}} />
             <div className="container">
                <Form />
             </div>
        </React.Fragment>
    )
}

export default Home