import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage, languages } = useContext(LanguageContext)
    return (
        <header>
            <div>
                <h1>havva</h1>
                
                <select value={language}
                    onChange={(event) => toggleLanguage(event.target.value)}>
                    {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.label}
                        </option>
                    ))}
                </select>

                <button onClick={toggleTheme}>
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </header>
    )
}
export default Header;