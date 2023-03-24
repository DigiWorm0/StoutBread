import React from "react";

const SCRIPT_URL = "https://w.behold.so/widget.js";

export default function BeholdEmbed() {

    React.useEffect(() => {
        const script = document.createElement("script");
        script.src = SCRIPT_URL;
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <figure data-behold-id="8a2EDD04mmFu9wWYc6ZZ"></figure>
    );
}