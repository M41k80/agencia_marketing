import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";

import { useEffect } from "react";
import Header from "components/careers/Header";
import Testimonial from "components/careers/Testimonial";
import LogoCloud from "components/careers/Logocloud";
import List_Position from "components/careers/List_Position";

function Careers() {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                <Header />
                <Testimonial />
                <LogoCloud />
                <List_Position />
            
           
                
            </div>
            <Footer />
        </Layout>
    )
}
export default Careers;