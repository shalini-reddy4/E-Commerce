import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            style={{
                padding: "6px 10px",
                borderRadius: "20px",
                fontSize: "14px",
                border: "1px solid var(--border-color)",
                background: "var(--card-bg)",
                color: "var(--font-color)",
                cursor: "pointer"
            }}
        >
            {theme === "light" ? "🌙 Dark" : "🌞 Light"}
        </button>
    );
};

export default ThemeToggle;
