import { createContext, useState } from "react"

const registeredLanguages = [
    { code: "en", label: "English" },
    { code: "tr", label: "Türkçe" },
]
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(registeredLanguages[0].code)
    const [languages] = useState(registeredLanguages);

    const toggleLanguage = (languageCode) => {
        setLanguage(languageCode);
    }
    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, languages }}>
            {children}
        </LanguageContext.Provider>
    )
}