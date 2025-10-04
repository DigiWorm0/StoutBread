import HeroHeader from "../components/Hero/HeroHeader.tsx";
import LatestPostsContainer from "../components/LatestPostsContainer.tsx";
import MenuContainer from "../components/MenuContainer.tsx";
import Footer from "../components/Footer/Footer.tsx";
import ApparelContainer from "../components/ApparelContainer.tsx";
import EventDispatcher from "../components/Events/EventDispatcher.tsx";
import React from "react";
import useThemeMode from "../hooks/useThemeMode.ts";
import useSystemTheme from "../hooks/useSystemTheme.ts";

export default function Home() {

    // Get Current Theme and System Theme
    const systemTheme = useSystemTheme();
    const [themeMode] = useThemeMode();

    // Set Dark Mode based on system preference
    React.useEffect(() => {
        const actualThemeMode = themeMode === "system" ? systemTheme : themeMode;
        document.body.setAttribute("data-bs-theme", actualThemeMode);
    }, [systemTheme, themeMode]);

    return (
        <>
            <HeroHeader/>
            <MenuContainer/>
            <ApparelContainer/>
            <LatestPostsContainer/>
            <Footer/>
            <EventDispatcher/>
        </>
    );
}