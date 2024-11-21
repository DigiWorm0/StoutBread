import {IoLogoVenmo} from "react-icons/io5";
import {BiLogoPaypal} from "react-icons/bi";
import {SiCashapp} from "react-icons/si";
import {AiOutlineInstagram} from "react-icons/ai";
import TrustPilotLink from "./TrustPilotLink.tsx";

export default function Footer() {
    return (
        <footer className={"bg-dark text-light text-center p-3 pb-1"}>
            <a
                href={"https://www.instagram.com/uwstoutbread/"}
                className={"m-2 btn-muted"}
            >
                <AiOutlineInstagram size={32}/>
            </a>
            <a
                href={"https://venmo.com/code?user_id=3425859289481216550&created=1663906241.1685271&printed=1"}
                className={"m-2 btn-muted"}
            >
                <IoLogoVenmo size={32}/>
            </a>
            <a
                href={"https://www.paypal.me/Stoutbread?locale.x=en_US"}
                className={"m-2 btn-muted"}
            >
                <BiLogoPaypal size={32}/>
            </a>
            <a
                href={"https://cash.app/$StoutBread"}
                className={"m-2 btn-muted"}
            >
                <SiCashapp size={32}/>
            </a>
            <div className={"m-2"}>
                <TrustPilotLink/>
            </div>
        </footer>
    )
}