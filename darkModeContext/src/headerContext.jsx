import React, {useContext}from "react";
import "./App.css";
import ThemeContext from "./themeContext";

const headerContext=() => {
    const {theme, handleThemeChange} = useContext(ThemeContext);
    return (
        <div className="headerContext">
            <p>Inicio</p>
            <button onClick={handleThemeChange} style={{background: theme.background, color: theme.font}}>
            Change theme
            </button>
        </div>
    )
};

export default headerContext;