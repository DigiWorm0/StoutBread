import React from "react";

export default function useSystemTheme() {
    return React.useMemo(() => {
        if (typeof window !== "undefined" && window.matchMedia) {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return "light";
    }, []);
}