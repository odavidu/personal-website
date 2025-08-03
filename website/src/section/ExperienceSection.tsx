import {Section} from "../components/Section";

const borderWidth = 3;
const dotSize = 15;
const leftSpacing = (borderWidth / 2) + (dotSize / 2);
const color = "#2b4c66";

export function ExperienceSection() {
    return <Section id="experience" className="bg-[#89b0c9]">
        <div className="inline-flex items-center space-x-6 pb-8">
            <div className="w-[383px] px-4 space-y-6">
                <h2 className="text-5xl italic underline underline-offset-8">Experience</h2>
                <p>A timeline of meaningful roles where I’ve applied my skills to research and software
                    development, and demonstrated leadership and independence in mentoring others across
                    academic and athletic settings.</p>
            </div>

            <div
                className="relative"
                style={{borderLeft: `${borderWidth}px solid ${color}`}}
            >
                <Experience
                    name="Platform Governance Research Lab"
                    logo="img/dirl.png"
                    url="https://truthmarket.com"
                    position="Undergraduate Research Assistant"
                    start="Feb. 2025"
                    end="Jun. 2025"
                />
                <Experience
                    name="Somerville High School"
                    logo="img/shs.png"
                    url="https://somerville.k12.ma.us/schools/somerville-high-school"
                    position="Assistant Tennis Instructor"
                    start="Feb. 2024"
                    end="Jun. 2024"
                />
                <Experience
                    name="The Calculus Project"
                    logo="img/calculus_project.png"
                    url="https://thecalculusproject.org/"
                    position="Learning Advisor"
                    start="Jul. 2023"
                    end="Aug. 2023"
                />
            </div>
        </div>

        {/*<div>*/}
        {/*    <div className="flex justify-center items-center">*/}
        {/*        <h1>Languages</h1>*/}
        {/*    </div>*/}
        {/*    <div className="flex justify-center items-center">*/}
        {/*        <h1>Skills</h1>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </Section>
}

interface ExperienceProps {
    name: string;
    logo: string;
    url: string;
    position: string;
    start: string;
    end: string;
}

function Experience({name, logo, url, position, start, end}: ExperienceProps) {
    return <div className="relative">
        <span
            className="rounded-full absolute top-[52px]"
            style={{
                left: `-${leftSpacing}px`,
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                backgroundColor: color,
            }}
        />

        <a href={url}>
            <div className="inline-flex items-center space-x-2 w-[440px] pl-8 py-8
                transition-all duration-300 ease-in-out hover:bg-black/5 ">
                <img className="size-16" src={logo} alt={name}/>
                <div className="space-y-0">
                    <p className="text-sm font-semibold">{start} – {end}</p>
                    <h3 className="text-lg font-bold text-gray mt-1">{name}</h3>
                    <p className="text-xs text-gray-700 mt-2">
                        {position}
                    </p>
                </div>
            </div>
        </a>
    </div>
}