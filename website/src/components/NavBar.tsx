import {useScrollSpy} from "../utils/utils";

export function NavBar() {
    const sectionIds = ["home", "about_me", "experience", "projects", "contact"];
    const activeId = useScrollSpy(sectionIds, 200);

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "about_me", label: "About Me" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="z-50 fixed font-raleway bg-[#F0F5F9] min-w-full inline-flex items-center justify-between
            px-24 py-4 opacity-0 animate-slide-in-down [animation-delay:200ms]">
            <a
                href="#home"
                className="transition-transform duration-200 transform hover:scale-105"
            >
                <h1 className="font-bold text-2xl">David Ou</h1>
            </a>

            <div className="flex space-x-4">
                {navLinks.map(({id, label}) => (
                    <a
                        href={id == 'contact' ? 'mailto:massdavidou@gmail.com' : `#${id}`}
                        className={`transition-all hover:underline hover:underline-offset-4 ${activeId === id ? 
                            "underline underline-offset-4 font-semibold" : ""
                        }`}
                    >
                        {label}
                    </a>
                ))}
            </div>

            <div className="flex space-x-4">
                <a
                    href="https://www.linkedin.com/in/david-ou"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-200 transform hover:scale-110 cursor-pointer"
                >
                    <i className="ri-linkedin-fill text-2xl"></i>
                </a>
                <a
                    href="https://github.com/odavidu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-200 transform hover:scale-110 cursor-pointer"
                >
                    <i className="ri-github-line text-2xl"></i>
                </a>
            </div>
        </nav>
    );
}