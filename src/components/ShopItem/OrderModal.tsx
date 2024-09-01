import {Button, Modal} from "react-bootstrap";
import {AiOutlineClose} from "react-icons/ai";
import {IoIosWarning} from "react-icons/io";
import {FiExternalLink} from "react-icons/fi";

export interface OrderModalProps {
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
}

export default function OrderModal(props: OrderModalProps) {
    const {isVisible, setIsVisible} = props;

    return (
        <Modal
            show={isVisible}
            onHide={() => setIsVisible(false)}
            size={"sm"}
            centered
            fullscreen={"md-down"}
        >
            <Modal.Header className={"d-block d-md-none"}>
                <Button
                    variant={"btn"}
                    onClick={() => setIsVisible(false)}
                    className={"float-end"}
                >
                    <AiOutlineClose
                        size={32}
                    />
                </Button>
            </Modal.Header>
            <Modal.Body>
                <div
                    className={"d-flex justify-content-center align-items-center text-center flex-column h-100"}
                >
                    <IoIosWarning
                        size={92}
                        className={"text-warning d-block mb-1"}
                    />
                    <h4 className={"fw-bold m-2"}>
                        You're Leaving<br/>Stout Bread
                    </h4>
                    <p className={"mt-2 mb-3"}>
                        All ordering is done through Instagram DMs.
                        Payment is accepted through Venmo, CashApp, Paypal, tap-to-pay, or cash.
                    </p>
                    <Button
                        variant={"primary"}
                        target={"_blank"}
                        onClick={() => setIsVisible(false)}
                        href={"https://ig.me/m/stout.bread?ref=stoutbread-com"}
                        className={"fw-bold float-end w-100 mt-1 mt-lg-0"}
                    >
                        DM @Stout.Bread
                        <FiExternalLink
                            className={"ms-1 mb-1"}
                        />
                    </Button>
                    <Button
                        size={"sm"}
                        variant={"link"}
                        onClick={() => setIsVisible(false)}
                        className={"fw-bold w-100 link-secondary text-decoration-none"}
                    >
                        Cancel
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}