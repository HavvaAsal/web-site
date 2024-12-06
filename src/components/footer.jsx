import React from "react";
import { Twitter } from 'lucide-react';
import { Box } from 'lucide-react';
import { AtSign } from 'lucide-react';
import { Instagram } from 'lucide-react';
import translations from "./translations";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
    const { language, toggleLanguage } = useLanguage();
    return (
        <footer className="py-12 bg-[#F9F9F9] text-[#120B39] dark:bg-[#252128] dark:text-[#8F88FF]">
            <div className="container mx-auto text-center">
                <h2
                    className="text-4xl font-semibold mb-4"
                    style={{ color: "#4731D3" }}
                >
                    {translations[language].footerMessage}
                </h2>
                <p className="text-lg dark:text-[#FFFFFF] ">
                {translations[language].footerInfo}
                </p>
            </div>
            <div className="flex justify-center space-x-6 mt-6">
                <Twitter className="text-[#4731D3] dark:text-[#8F88FF]" size={32} />
                <Box className="text-[#4731D3] dark:text-[#8F88FF]" size={32} />
                <AtSign className="text-[#4731D3] dark:text-[#8F88FF]" size={32} />
                <Instagram className="text-[#4731D3] dark:text-[#8F88FF]" size={32} />
            </div>
        </footer>
    );
};

export default Footer;
