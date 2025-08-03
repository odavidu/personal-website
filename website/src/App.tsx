import React from 'react';
import './index.css';
import "remixicon/fonts/remixicon.css";
import {NavBar} from "./components/NavBar";
import {ProfileSection} from "./section/ProfileSection";
import {AboutMeSection} from "./section/AboutMeSection";
import {ExperienceSection} from "./section/ExperienceSection";
import {ProjectsSection} from "./section/ProjectsSection";
import {FooterSection} from "./section/FooterSection";

function App() {
    return (
        <div id="home" className="bg-[#F0F5F9] text-[#2b4c66] min-h-screen min-w-full">
            <NavBar/>
            <ProfileSection/>
            <AboutMeSection/>
            <ExperienceSection/>
            <ProjectsSection/>

            <FooterSection/>

        </div>
    );
}

export default App;
