import { useEffect, useState } from "react";

function currentThemeIsDark(): boolean {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function useThemeDetector() {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(currentThemeIsDark());
    const onThemeChange = (e: MediaQueryListEvent) => {
        setIsDarkTheme(e.matches);
    };

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addEventListener("change", onThemeChange);
        // Below arrow function will be run on cleanup, i.e. when component unmounts/re-mounts
        return () => darkThemeMq.removeEventListener("change", onThemeChange);
    }, []);
    return isDarkTheme;
}

export default function CurrentThemeComponent() {
    const isDarkTheme = useThemeDetector();
    return <p>Current Theme is: {isDarkTheme ? "dark" : "light"}</p>;
}
