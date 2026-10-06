import { useContext, useState } from "react"
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {/* <SideBar />
            <Header /> */} {/* Here sidebar doesn't use context state value but it will rerender be
            beacause parent component renders or Passing value={{ theme, setTheme }} will create new reference
            so react will re render as props changes*/}
            {/* To solve this we can use React.memo or composite Component like wrap SideBar with React.memo
            export default React.memo(SideBar)*/}
            <div className={`app ${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;