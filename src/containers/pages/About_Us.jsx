import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";

function About_Us() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                About Us
            
           
                <Footer />
            </div>
        </Layout>
    )
}
export default About_Us;