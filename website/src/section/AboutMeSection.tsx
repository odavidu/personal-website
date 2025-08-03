import {Section} from "../components/Section";
import React from "react";
import PhotoLoop from "../components/PhotoCarousel";

export function AboutMeSection() {
    return <Section id="about_me" className="-scroll-mt-36">
        <div className="text-center space-y-6">
            <h2 className="font-semibold text-6xl">About Me</h2>
            <hr className="h-1 w-8 bg-[#2b4c66] mx-auto"/>
            <p>
                I'm a junior at Boston University and I am currently pursing a Bachelor of Arts in <u>Mathematics and
                Computer Science</u>. I'm especially fascinated by quantum computing, which combines
                abstract mathematics, computer science, and physics to solve problems that classical computers can’t.
                I'm also curious about how these ideas can evolve into future technologies and applications.
                Outside of academics, I enjoy playing tennis and staying active.
            </p>

            <PhotoLoop images={["img/photo-1.jpg", "img/photo-2.jpg", "img/photo-3.jpg", "img/photo-4.jpg", "img/photo-5.jpg"]} />
        </div>
    </Section>;
}