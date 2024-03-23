import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";



import Services from "../components/services/Services";
import Instructors from "../components/instructors/Instructors";
import Steps from "../components/steps/Steps";
import Banner from "../components/Banner/Banner";
import Popular from "../components/popularcourses/Popular";

// Initialize Swiper core components

const Home = () => {
  return (
    <Layout className="grainy">
      <div className="mx-auto mb-16 mt-16 w-[90%]">
        <Banner />

        {/* Steps */}
        <Steps />

        {/* services */}
        <Services />

        {/* courses popular */}
        <Popular/>

        {/* Instructors  */}
        <Instructors />
      </div>
    </Layout>
  );
};

export default Home;
