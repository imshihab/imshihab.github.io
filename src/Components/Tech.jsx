import React from "react";
import { CodeBlockIcon, CodeIcon, FigmaIcon, GithubIcon } from "./ICONS";
import { Atom, Globe2, Search, Server, Settings, Wind } from "lucide-react";

const NeoCard = ({
    title,
    icon: Icon,
    children,
    bg = "bg-white",
    headerBg = "bg-white",
    className = "",
}) => (
    <div
        className={`
    ${bg} border-4 border-black
    shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
    hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
    hover:translate-x-1 hover:translate-y-1
    transition-all duration-200 ease-in-out
    ${className}`}
    >
        {title && (
            <div
                className={`${headerBg} border-b-4 border-black p-4 flex items-center gap-3`}
            >
                {Icon && (
                    <Icon size={26} className="text-black" strokeWidth={3} />
                )}
                <h3 className="font-black text-xl uppercase tracking-wider">
                    {title}
                </h3>
            </div>
        )}
        <div className="p-6">{children}</div>
    </div>
);

const SkillBox = ({
    skill,
    icon: Icon,
    bg = "bg-white",
    text = "text-black",
    iconColor = "text-black",
}) => (
    <div
        className={`
    ${bg} ${text}
    border-4 border-black
    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
    font-black uppercase text-sm tracking-widest
    p-4
    hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
    hover:bg-[#34A853] hover:text-white
    transition-all cursor-default
    flex flex-col items-center justify-center gap-3
    w-32 h-32
    text-center
    group
  `}
    >
        {Icon && (
            <Icon
                size={32}
                className={`${iconColor} group-hover:text-white transition-colors`}
                strokeWidth={2.5}
            />
        )}
        <span>{skill}</span>
    </div>
);

function Tech() {
    return (
        <div className="space-y-8 animate-fade-up delay-300">
            <NeoCard
                title="Development Stack"
                icon={CodeBlockIcon}
                bg="bg-[#fdfbf7]"
                headerBg="bg-[#FFB800]" // Vibrant yellow header
            >
                <h3 className="font-black text-lg mb-4 uppercase text-gray-800">
                    Web Development
                </h3>
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                    <SkillBox
                        skill="HTML5"
                        icon={CodeIcon}
                        bg="bg-[#E34F26]"
                        text="text-white"
                        iconColor="text-white"
                    />
                    <SkillBox
                        skill="CSS3"
                        icon={CodeIcon}
                        bg="bg-[#1572B6]"
                        text="text-white"
                        iconColor="text-white"
                    />
                    <SkillBox
                        skill="JavaScript"
                        icon={CodeIcon}
                        bg="bg-[#F7DF1E]"
                        iconColor="text-black"
                    />
                    <SkillBox
                        skill="React"
                        icon={Atom}
                        bg="bg-[#61DAFB]"
                        iconColor="text-black"
                    />
                    <SkillBox
                        skill="Tailwind CSS"
                        icon={Wind}
                        bg="bg-[#06B6D4]"
                        text="text-white"
                        iconColor="text-white"
                    />
                </div>

                <h3 className="font-black text-lg mb-4 uppercase text-gray-800">
                    Backend & Others
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                    <SkillBox
                        skill="Node.js"
                        icon={Server}
                        bg="bg-[#339933]"
                        text="text-white"
                        iconColor="text-white"
                    />
                    <SkillBox
                        skill="Python"
                        icon={CodeBlockIcon}
                        bg="bg-[#3776AB]"
                        text="text-white"
                        iconColor="text-white"
                    />
                    <SkillBox
                        skill="C++"
                        icon={CodeIcon}
                        bg="bg-[#00599C]"
                        text="text-white"
                        iconColor="text-white"
                    />
                </div>
            </NeoCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Tools Card */}
                <NeoCard
                    title="Tools"
                    icon={Settings}
                    bg="bg-[#fdfbf7]"
                    headerBg="bg-[#FF90E8]" // Vibrant pink header
                >
                    <ul className="space-y-4 font-bold text-lg">
                        <li className="flex items-center gap-3 bg-white border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <GithubIcon size={24} className="text-black" /> Git
                            & Github
                        </li>
                        <li className="flex items-center gap-3 bg-white border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <FigmaIcon size={24} className="text-[#F24E1E]" />{" "}
                            Figma
                        </li>
                        <li className="flex items-center gap-3 bg-white border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <Search size={24} className="text-[#4285F4]" />{" "}
                            Advanced Googling
                        </li>
                    </ul>
                </NeoCard>

                {/* Languages Card */}
                <NeoCard
                    title="Languages"
                    icon={Globe2}
                    bg="bg-[#fdfbf7]"
                    headerBg="bg-[#4D96FF]" // Vibrant blue header
                >
                    <div className="space-y-6 font-medium text-base">
                        <div className="bg-white border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] relative">
                            <div className="absolute -top-3 left-4 bg-black text-white text-xs font-black uppercase px-2 py-1">
                                Speak & Listen
                            </div>
                            <p className="font-black mt-2 text-lg">
                                Bangla (Native), English, Hindi
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] relative">
                            <div className="absolute -top-3 left-4 bg-black text-white text-xs font-black uppercase px-2 py-1">
                                Read & Write
                            </div>
                            <p className="font-black mt-2 text-lg">
                                Bangla, English
                            </p>
                        </div>
                    </div>
                </NeoCard>
            </div>
        </div>
    );
}

export default Tech;
