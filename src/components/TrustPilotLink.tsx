import {BiSolidStar} from "react-icons/bi";

export default function TrustPilotLink() {
    return (
        <a
            href="https://www.trustpilot.com/review/stoutbread.com"
            target="_blank"
            rel="noopener"
            className={"btn btn-muted"}
        >

            Review us on
            <BiSolidStar
                className={"ms-1 mb-1"}
            />
            Trustpilot
        </a>

    )
}