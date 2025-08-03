import {ReactNode} from "react";

type SectionProps = {
    className?: string;
    id: string;
    children: ReactNode;
}

export function Section({className, id, children}: SectionProps) {
    return <section id={id} className={`-scroll-mt-8 flex justify-center py-56 ${className || ""}`}>
        <div className="w-[850px]">{children}</div>
    </section>
}