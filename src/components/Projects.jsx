import React from "react";
import translations from "./translations";
import { useLanguage } from "../context/LanguageContext";


const Projects = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <section
            className="py-16"
            style={{ backgroundColor: "var(--projects-bg-color)" }}
        >
            <h2
                className="text-4xl font-bold text-center mb-12"
                style={{ color: "var(--projects-title-color)" }}
            >
               {translations[language].projectsTitle}
            </h2>

            <div className="container mx-auto flex flex-col items-center gap-8">
                {/* Proje 1 */}
                <div
                    className="flex bg-white dark:bg-[#2B2727] p-6 rounded-lg shadow-lg"
                    style={{ width: "960px", height: "360px" }}
                >
                    {/* Sol Kısım: Resim */}
                    <div className="w-1/3">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/ad50/81bf/69bb4825e42350e768340fdbec09d78b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-clAOBQbxDC~Z69d1Uqlyf6fT9JKf~AiJC84mrL185rAA89NIQzy5lHo2KAOjwLui9lxa~vYMN~7WVEZt9l-gu0zrz-UX70KGi~wQX9WIJEhkCT46ru5MF1BHk0YD8peYO8g-SOEGUe76ylM10eywxWKRBUUsCQOOCzdJh9x~PFQyHae~MsVVtz0~9urMdui8vfOnHKXOWlO16oVWmk04FIwjfieRLNWvq7BPNgNB9MTGmjDLjA3bVXgoEaMR5c5OJn3yk2Q-ykW9uXUbSpVL~wF4xQIQ9L8KlrDT-hyzzVtHP6W4f4PR4Oxj-XpHZyyVgtmePeBCQ1Zv630bKspw__"
                            alt="Project 1"
                            className="w-full h-full object-cover rounded-l-lg"
                        />
                    </div>

                    {/* Sağ Kısım: Yazılar */}
                    <div className="w-2/3 pl-6">
                        <h3 className="text-2xl font-semibold mb-4">Workintech</h3>
                        <p
                            className="text-lg mb-4"
                            style={{ color: "var(--paragraph-color)" }}
                        >
                           {translations[language].projectInfo}
                        </p>
                        <div className="flex space-x-4 mb-4">
                            <button className="bg-[#4731D3] text-white px-4 py-2 rounded">
                                React
                            </button>
                            <button className="bg-[#4731D3] text-white px-4 py-2 rounded">
                                Redux
                            </button>
                            <button className="bg-[#4731D3] text-white px-4 py-2 rounded">
                                Vercel
                            </button>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href="https://example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#4731D3] underline"
                            >
                                View Site
                            </a>
                            <a
                                href="https://github.com/HavvaAsal?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#4731D3] underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Proje 2 */}
                <div
                    className="flex bg-white dark:bg-[#2B2727] p-6 rounded-lg shadow-lg"
                    style={{ width: "960px", height: "360px" }}
                >
                    {/* Sol Kısım: Resim */}
                    <div className="w-1/3">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/600e/630b/a9370e031b441737654465d0f374af51?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DbbbB7utvQbn499o4D2i78qttO38iyzSq3dKSv7LkmNo1DIm9-iTjSAjoXlroPBIkzH17E7WoDGJzBeC2IBn05oUW8rwt77PLlI-yOpPMMQAmLmffpwNu22xpw4H2XBNOidnWR62WYnSjCQcHWccbVIkQXyD6uplA0Ycvlcucl~WEc43RF9VP~-kGuUeOQpe4yWNiOYVCi~QobCr9PwW3tF97Mk5yoDEHKOC-PwAVt2qGm3b7Iq0h45Ffx5Fk-~GGNnjWQqKzVLZWufpeG9vbG1yNkBihRNfl6MNBV5EynRPWUoYYcCPFZ0PzkbC8ds-f1EyoWS1Q8JXJ~vwN6FqyA__"
                            alt="Project 2"
                            className="w-full h-full object-cover rounded-l-lg"
                        />
                    </div>

                    {/* Sağ Kısım: Yazılar */}
                    <div className="w-2/3 pl-6">
                        <h3 className="text-2xl font-semibold mb-4">Journey</h3>
                        <p
                            className="text-lg mb-4"
                            style={{ color: "var(--paragraph-color)" }}
                        >
                            {translations[language].projectInfo}
                        </p>
                        <div className="flex space-x-4 mb-4">
                            <button className="bg-[#4731D3] text-white px-4 py-2 rounded">
                                React
                            </button>
                            <button className="bg-[#4731D3] text-white px-4 py-2 rounded">
                                Redux
                            </button>
                            <button className="bg-[#4731D3] text-white px-4 py-2 rounded">
                                Vercel
                            </button>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href="https://view.com" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#4731D3] underline"
                            >
                                View Site
                            </a>
                            <a
                                href="https://github.com/username/repository"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#4731D3] underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
