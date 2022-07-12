import Form from "../../Components/Form"
import Header from "../../Components/Header"
import Footer from '../../Components/Footer'

function Home() {
    return (
        <div className="background">
            <Header params={{title: "HRnet", link: {text: "View current employees", href: "/employees"}}} />
            <div className="container">
                <Form />
            </div>
            <Footer />
        </div>
    )
}

export default Home