import {BiSolidStar} from "react-icons/bi";
import {FiExternalLink} from "react-icons/fi";

export default function TrustPilotButton() {
    return (
        <a
            href="https://www.trustpilot.com/review/stoutbread.com"
            target="_blank"
            rel="noopener"
            className={"btn btn-primary"}
        >

            Review us on
            <BiSolidStar
                className={"ms-1 mb-1"}
            />
            <span className={"fw-bold"}>
                Trustpilot
            </span>
            <FiExternalLink
                className={"ms-1 mb-1"}
            />
        </a>

    )
}