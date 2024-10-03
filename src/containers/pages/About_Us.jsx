import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";

import { useEffect } from "react";
import Header from "components/about/Header";
import TestStats from "components/about/TestStats";
import Images from "components/about/Images";
import Clients from "components/about/Clients";
import Features from "components/about/Features";
import Team from "components/about/Team";
import Cta from "components/about/Cta";

function About_Us() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Navbar />
        <div className="pt-28">
            <Header />
            <TestStats />
            <Images />
            <Clients />
            <Features />
            <Team />
            <Cta />

        </div>
      <Footer />
    </Layout>
  );
}
export default About_Us;
