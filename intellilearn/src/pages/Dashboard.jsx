import React from "react";
import DashLay from "../layout/DashLay";
import Pricing from "../components/Pricing/Pricing";
import SpecialEntryView from "../components/Entry/Entry";
import { dummyData } from "../services/Course";
import CourseCard from "../components/cards/CourseCard";

const Dashboard = () => {
  return (
    <DashLay>
      <SpecialEntryView />
      <CourseCard dummyData={dummyData}/>
      <Pricing />
    </DashLay>
  );
};

export default Dashboard;
