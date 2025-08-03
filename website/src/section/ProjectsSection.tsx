import {Section} from "../components/Section";
import React from "react";
import {Skill} from "../components/Skill";

export function ProjectsSection() {
    return <Section id="projects">
        <div className="space-y-6">
            <h2 className="text-center font-semibold text-6xl">Projects</h2>
            <hr className="h-1 w-8 bg-[#2b4c66] mx-auto"/>
            <div className="space-y-6">
                <Project
                    name="Lets Prep" start="Oct. 2024" end="Dec. 2024"
                    desc="I conceived the concept and implemented the OpenAI API integration for a full stack web app
                    that delivers an interactive study experience. On the front end it uses React and Remix, while Go
                    and MongoDB power the back end. You enter a topic or paste in a prompt and the app generates a set
                    of practice problems in multiple choice, short answer or essay style for self paced learning. Each
                    active session saves every exercise so you can review your recent work and track your progress over
                    time."
                    skills={[
                        {id: "React", url: "https://reactjs.org"},
                        {id: "Remix", url: "https://remix.run"},
                        {id: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
                        {id: "Tailwind CSS", url: "https://tailwindcss.com"},
                        {id: "Go (Golang)", url: "https://golang.org"},
                        {id: "MongoDB", url: "https://www.mongodb.com"},
                        {id: "RESTful API", url: "https://restfulapi.net"},
                        {id: "OpenAI API", url: "https://platform.openai.com/docs/api-reference"},
                        {id: "Prompt Engineering", url: "https://platform.openai.com/docs/guides/prompt-engineering"},
                        {id: "Git", url: "https://git-scm.com"}
                    ]}
                    img="img/letsprep.png" github="https://github.com/odavidu/letsprep" link=""
                />
                <Project
                    name="Minecraft Server" start="Jun. 2017" end="Oct. 2022"
                    desc="I founded and managed a Minecraft Bedrock Edition server called NexusPE, which became the top result for
                    'nexuspe' on YouTube. The server attracted over 100,000 registered players and built a strong community of 1,000+
                    active Discord members. With custom-coded content and reliable performance, NexusPE consistently generated over
                    $1,000 in monthly revenue. I led all aspects of development and operations, including Linux server administration,
                    plugin development, backend integration, and community engagement."
                    skills={[
                        {id: "Object-Oriented Programming (OOP)", url: "https://en.wikipedia.org/wiki/Object-oriented_programming"},
                        {id: "Linux (Ubuntu)", url: "https://ubuntu.com"},
                        {id: "PHP", url: "https://www.php.net"},
                        {id: "MySQL", url: "https://www.mysql.com"},
                        {id: "API Integration", url: "https://en.wikipedia.org/wiki/API"},
                        {id: "Minecraft Server Development", url: "https://minecraft.wiki/Server"},
                        {id: "Discord Bot Integration", url: "https://discord.com/developers/docs/intro"}
                    ]}
                    img="img/minecraft.png"
                    github="" link="https://www.youtube.com/watch?v=q4Q7dWizsvo"
                />

            </div>
        </div>
    </Section>
;
}

type ProjectProps = {
    name: string;
    start: string;
    end: string;
    desc: string;
    skills: {id: string, url: string}[];
    img: string;
    github: string;
    link: string;
}

function Project({name, start, end, desc, skills, img, github, link}: ProjectProps) {
    return <div className="w-full bg-white px-16 py-8 rounded-lg inline-flex">
        <div className="w-1/4 flex items-center justify-center">
            <img src={img} alt={name} className="max-w-full h-auto"/>
        </div>
        <div className="w-3/4 pl-12">
            <h3 className="text-lg font-bold text-gray mt-1">{name}</h3>
            <div className="flex justify-between items-center">
                <p className="text-md font-semibold">{start} – {end}</p>
                <div className="flex gap-4 items-center text-2xl">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer"
                           className="font-bold transition-transform duration-200 transform hover:scale-110">
                            <i className="ri-github-line"></i>
                        </a>
                    )}
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer"
                           className="font-bold transition-transform duration-200 transform hover:scale-110">
                            <i className="ri-link"></i>
                        </a>
                    )}
                </div>
            </div>
            <p className="text-sm text-gray-700 my-2">
                {desc}
            </p>
            <div>
                {skills.map(({id, url}) => (
                    <Skill name={id} url={url}/>
                ))}
            </div>
        </div>
    </div>
}