import {OverlayTrigger, Tooltip} from "react-bootstrap";

export interface PaymentIconProps {
    name: string;
    href: string;
    children: React.ReactNode;
}

export default function PaymentIcon(props: PaymentIconProps) {
    return (
        <OverlayTrigger
            overlay={<Tooltip>{props.name}</Tooltip>}
            placement="bottom"
        >
            <a
                href={props.href}
                className={"m-2 btn-muted"}
            >
                {props.children}
            </a>
        </OverlayTrigger>
    )
}