import React from "react";

const skills = [
    { name: "JAVASCRIPT", logo: "/logo/js-logo 1.png" },
    { name: "NODE", logo: "/logo/node.png" },
    { name: "REACT", logo: "/logo/Rectangle 35.png" },
    { name: "VSCODE", logo: "/logo/Group 101 (1).png" },
    { name: "REDUX", logo: "/logo/Group 101.png" },
    { name: "FİGMA", logo: "/logo/figma-logo 1.png" },
];

const Skills = () => {
    return (
        <div className="bg-white dark:bg-[#252128] p-8">
            <h2
                className="text-3xl font-bold mb-6 text-center text-[#4832D3] dark:text-[#CBF281]"
            >
                Skills
            </h2>
            <div className="flex justify-center space-x-16">
                {/* Sol taraf (3 logo) */}
                <div className="flex flex-col items-center space-y-6">
                    {skills.slice(0, 3).map((skill, index) => (
                        <div key={index} className="text-center flex items-center space-x-4">
                            {/* Logo */}
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-32 h-32 object-contain"
                            />
                            {/* Skill Name */}
                            <p className="text-lg text-[#777777] dark:text-[#FFFFFF]">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Sağ taraf (3 logo) */}
                <div className="flex flex-col items-center space-y-6">
                    {skills.slice(3).map((skill, index) => (
                        <div key={index} className="text-center flex items-center space-x-4">
                            {/* Logo */}
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-32 h-32 object-contain"
                            />
                            {/* Skill Name */}
                            <p className="text-lg text-[#777777] dark:text-[#FFFFFF]">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
