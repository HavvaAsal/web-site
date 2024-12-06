import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import ThemeChanger from "./ThemeChanger";
import translations from "./translations";

const Header = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <header className="h-screen flex relative">
            {/***** Sol Taraf *****/}
            <div
                className="flex-1 flex flex-col justify-center items-center text-white"
                style={{ backgroundColor: "var(--left-bg-color)" }}
            >
                <h1 className="text-4xl font-extrabold mb-4 tracking-wide text-center" style={{ color: "#CBF281" }}>
                    {translations[language].headerTitle}
                </h1>
                <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: "#CBF281" }}>
                    {translations[language].heroSubtitle}
                </h2>
                <p className="text-lg mb-6 text-center">
                    {translations[language].heroDescription}
                </p>
                <div className="flex space-x-4">
                    <button className="bg-white text-black px-4 py-2 rounded font-semibold flex items-center space-x-2">
                        <Github /> <span>Github</span>
                    </button>
                    <button className="bg-white text-black px-4 py-2 rounded font-semibold flex items-center space-x-2">
                        <Linkedin /> <span>LinkedIn</span>
                    </button>
                </div>
            </div>

            {/***** Sağ Taraf *****/}
            <div
                className="w-1/3"
                style={{ backgroundColor: "var(--right-bg-color)" }}
            ></div>

            {/***** Renk Geçiş Ortasında Resim *****/}
            <div
                className="absolute top-1/2 left-[44%] transform -translate-y-1/2 translate-x-1/2 w-[350px] h-[375px]"
            >
                <img
                    src="/images/hero-right.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/***** Üst Sağda Dil ve Tema Butonları *****/}
            <div className="absolute top-4 right-4 flex space-x-4">
                <button className="bg-white text-black px-4 py-2 rounded-full shadow-lg" onClick={toggleLanguage}>
                    {translations[language].changeLanguage}
                </button>
                <ThemeChanger />
            </div>
        </header>
    );
};

export default Header;
