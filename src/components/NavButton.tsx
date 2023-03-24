import React from "react";
import { Nav } from "react-bootstrap";

interface NavButtonProps {
    name: string;
    href: string;
    icon: JSX.Element;
}

export default function NavButton(props: NavButtonProps) {
    const [isHovered, setIsHovered] = React.useState(false);


    return (
        <Nav.Item
            className="m-1 fw-bold"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Nav.Link
                href={props.href}
                style={{
                    transition: "transform 0.2s ease-in-out",
                    color: isHovered ? "black" : "rgb(49, 74, 89)",
                    transform: isHovered ? "scale(1.05)" : "scale(1)"
                }}
            >
                {props.icon}
                <span className="ms-1" />
                {props.name}
            </Nav.Link>
        </Nav.Item >
    );
}