import React from "react"
import Header from "./components/header"
import { ThemeProvider } from "./context/ThemeContext"
import { LanguageProvider } from "./context/LanguageContext"
function App() {

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <Header />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
