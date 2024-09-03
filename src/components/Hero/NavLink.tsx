import React from "react";

export interface NavLinkProps {
    targetID: string;
    children: React.ReactNode;
}

export default function NavLink(props: NavLinkProps) {
    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation();
        e.preventDefault();

        const targetElement = document.getElementById(props.targetID);
        if (targetElement)
            targetElement.scrollIntoView({behavior: "smooth"});
    }

    return (
        <a
            href={`#${props.targetID}`}
            className={"nav-link-anim m-3"}
            onClick={onClick}
        >
            {props.children}
        </a>
    );
}