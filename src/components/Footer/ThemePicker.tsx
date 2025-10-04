import useThemeMode from "../../hooks/useThemeMode.ts";
import {MdDarkMode, MdLightMode, MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md";
import {RiComputerFill, RiComputerLine} from "react-icons/ri";

export default function ThemePicker() {
    const [themeMode, setThemeMode] = useThemeMode();

    return (
        <div className="d-flex align-items-center">
            <button
                className={`btn btn-sm me-1 ms-1 ${themeMode === 'system' ? 'text-light' : 'text-secondary'}`}
                onClick={() => setThemeMode('system')}
                aria-pressed={themeMode === 'system'}
                title="System Default"
            >
                {themeMode === 'system' ? <RiComputerFill size={20}/> : <RiComputerLine size={20}/>}
            </button>

            <button
                className={`btn btn-sm me-1 ms-1 ${themeMode === 'light' ? 'text-light' : 'text-secondary'}`}
                onClick={() => setThemeMode('light')}
                aria-pressed={themeMode === 'light'}
                title="Light Mode"
            >
                {themeMode === 'light' ? <MdLightMode size={20}/> : <MdOutlineLightMode size={20}/>}
            </button>

            <button
                className={`btn btn-sm me-1 ms-1 ${themeMode === 'dark' ? 'text-light' : 'text-secondary'}`}
                onClick={() => setThemeMode('dark')}
                aria-pressed={themeMode === 'dark'}
                title="Dark Mode"
            >
                {themeMode === 'dark' ? <MdDarkMode size={20}/> : <MdOutlineDarkMode size={20}/>}
            </button>
        </div>
    );
}