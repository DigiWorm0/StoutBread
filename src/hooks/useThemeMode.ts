import React from "react";
import {atom, useAtom} from "jotai";

const THEME_MODE_KEY = 'theme_mode';

const themeModeAtom = atom<'system' | 'dark' | 'light'>('system');

export default function useThemeMode() {
    const [_themeMode, _setThemeMode] = useAtom(themeModeAtom);

    // On mount, read the preferred theme mode from localStorage
    React.useEffect(() => {
        const themeModeInStorage = localStorage.getItem(THEME_MODE_KEY);

        if (themeModeInStorage === 'dark' ||
            themeModeInStorage === 'light' ||
            themeModeInStorage === 'system') {
            _setThemeMode(themeModeInStorage);
        }
    }, [_setThemeMode]);

    // Function to update the theme mode and persist it to localStorage
    const setThemeMode = React.useCallback((mode: 'system' | 'dark' | 'light') => {
        localStorage.setItem(THEME_MODE_KEY, mode);
        _setThemeMode(mode);
    }, []);

    return [_themeMode, setThemeMode] as const;
}