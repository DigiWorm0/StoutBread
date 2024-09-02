import {IoLogoVenmo} from "react-icons/io5";
import {BiLogoPaypal} from "react-icons/bi";
import {SiCashapp} from "react-icons/si";
import PaymentIcon from "./PaymentIcon.tsx";

export default function PaymentIcons() {
    return (
        <div className={"text-center m-auto m-lg-0"} style={{width: 250}}>
            <PaymentIcon
                name={"Venmo: @StoutBread"}
                href={"https://venmo.com/code?user_id=3425859289481216550&created=1663906241.1685271&printed=1"}
            >
                <IoLogoVenmo size={32}/>
            </PaymentIcon>
            <PaymentIcon
                name={"PayPal: @StoutBread"}
                href={"https://www.paypal.me/Stoutbread?locale.x=en_US"}
            >
                <BiLogoPaypal size={32}/>
            </PaymentIcon>
            <PaymentIcon
                name={"Cash App: $StoutBread"}
                href={"https://cash.app/$StoutBread"}
            >
                <SiCashapp size={32}/>
            </PaymentIcon>
        </div>
    )
}