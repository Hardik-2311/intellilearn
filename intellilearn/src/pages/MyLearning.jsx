import React from "react";
import DashLay from "../layout/DashLay";
import Sidebar from "../components/sidebar/Sidebar";
import { SidebarItem } from "../components/sidebar/Sidebar";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
} from "lucide-react";

const MyLearning = () => {
  return (
    <DashLay>
      <div className="flex">
        {/* Sidebar */}
        <div className="flex">
          <Sidebar>
            <SidebarItem icon={<Home size={20} />} text="Home" alert />
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              
            />
            <SidebarItem
              icon={<StickyNote size={20} />}
              text="Projects"
              alert
            />
            <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
            <SidebarItem icon={<Layers size={20} />} text="Tasks" />
            <SidebarItem icon={<Flag size={20} />} text="Reporting" />
            <hr className="my-3" />
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
          </Sidebar>
        </div>
        {/* Personal Courses */}
        <div className="w-3/4">
          {/* Place your personal courses content here */}
          <h2 className="text-2xl font-bold mb-4">My Personal Courses</h2>
          {/* Add your personal courses content */}
        </div>
      </div>
    </DashLay>
  );
};

export default MyLearning;
