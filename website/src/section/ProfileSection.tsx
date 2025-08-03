import {Section} from "../components/Section";
import React from "react";

export function ProfileSection() {
    return <Section id="profile">
        <div className="flex justify-center space-x-8 items-center">
            <img className="opacity-0 animate-slide-in-left [animation-delay:800ms] size-72 rounded-full"
                 src="img/me.webp" alt="profile"/>

            <div className="opacity-0 animate-slide-in-right [animation-delay:800ms] space-y-2">
                <h1 className="font-extrabold text-6xl">David Ou</h1>

                <h1 className="text-4xl">Mathematics & Computer Science @ Boston University</h1>
                <a href="mailto:massdavidou@gmail.com">
                    <button
                        className="bg-[#2b4c66] mt-2 px-5 py-2 text-white rounded-full text-lg font-semibold hover:scale-105 transform transition-transform duration-200">
                        Contact Me
                    </button>
                </a>
            </div>
        </div>
    </Section>;
}