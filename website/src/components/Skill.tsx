type SkillProps = {
    name: string;
    url: string;
}

export function Skill({ name, url }: SkillProps) {
    return <a className="transform transition-transform duration-300 hover:scale-105 inline-block my-1 mr-2 px-3 py-1.5 bg-[#2b4c66] text-white font-semibold rounded-full text-sm"
              href={url} target="_blank" rel="noopener noreferrer">{name}</a>
}