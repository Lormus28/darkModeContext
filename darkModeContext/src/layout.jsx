import react, { useContext } from "react";
import ThemeContext from "./themeContext";

const layout = ({children}) => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className="layout" style={{color: theme.font, background: theme.background}}>
            {children}
        </div>
    )
};

export default layout;