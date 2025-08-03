import React from "react";

export function FooterSection() {
    return (<footer className="bg-[#3b5569] py-16 text-center text-white">
        <h1 className="text-3xl font-bold text-white">Thanks for checking out my website!</h1>
        <h2 className="text-xl text-[#d1e4f0]">Feel free to connect with me</h2>

        <div className="inline-flex items-center gap-4 text-2xl mt-4 text-[#f1f5f9]">
            <a
                href="mailto:massdavidou@gmail.com"
                className="transition-transform transform hover:scale-110"
            >
                <i className="ri-mail-send-line"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/david-ou"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
            >
                <i className="ri-linkedin-fill"></i>
            </a>
        </div>

        <span className="block text-sm mt-6 text-[#cbd5e1]">Copyright © 2025 David Ou</span>
    </footer>);
}