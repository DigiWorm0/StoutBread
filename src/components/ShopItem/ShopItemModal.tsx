import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {AiOutlineClose} from "react-icons/ai";
import {ShopItemID} from "../../types/ShopItem.ts";
import ItemTypePicker from "./ItemTypePicker.tsx";
import useShopItem from "../../hooks/useShopItem.ts";
import FormattedText from "../Generic/FormattedText.tsx";
import {TbMessage} from "react-icons/tb";
import {FaCarSide} from "react-icons/fa";

export interface ShopItemModalProps {
    itemID?: ShopItemID;
    isVisible: boolean;
    showNutrition?: boolean;
    setSelectedItemID: (itemID: ShopItemID) => void;
    setIsVisible: (isVisible: boolean) => void;
}

export default function ShopItemModal(props: ShopItemModalProps) {
    const item = useShopItem(props.itemID);
    const {
        isVisible,
        setSelectedItemID,
        setIsVisible,
    } = props;

    return (
        <Modal
            show={isVisible}
            onHide={() => setIsVisible(false)}
            size={"xl"}
            centered
            fullscreen={"md-down"}

        >
            <Modal.Header className={"d-block d-lg-none"}>
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
                <Container>
                    <Row>
                        <Col lg={6}>
                            {/* Product Image */}
                            <img
                                src={`/images/shop/${item?.id}.jpg`}
                                alt={item?.name}
                                className={"img-fluid"}
                            />
                        </Col>
                        <Col>
                            {/* Close Button */}
                            <Button
                                variant={"btn"}
                                onClick={() => setIsVisible(false)}
                                className={"float-end d-none d-lg-block"}
                            >
                                <AiOutlineClose
                                    size={32}
                                />
                            </Button>

                            {/* Product Name */}
                            <h1 className={"fw-bold mt-5"}>
                                {item?.name}
                            </h1>

                            {/* Product Pricing */}
                            <h5 className={"mt-1 mb-2"}>
                                {item?.price}
                            </h5>

                            {/* Product Type Picker */}
                            {item && (
                                <ItemTypePicker
                                    itemID={item.id}
                                    onSelectID={setSelectedItemID}
                                />
                            )}

                            <Container>
                                <Row>
                                    {/* Product Description */}
                                    <Col>
                                        <FormattedText>
                                            {item?.description}
                                        </FormattedText>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr/>
                                    </Col>
                                </Row>

                                {/* Order Button */}
                                <Row>
                                    <Col>
                                        <div
                                            className={"d-flex justify-content-center align-items-center h-100 flex-column"}>
                                            <FaCarSide
                                                className={"text-muted"}
                                                size={24}
                                            />
                                            <small className={"mb-0 text-center text-muted"}>
                                                Free Delivery Around UW-Stout
                                            </small>
                                        </div>
                                    </Col>
                                    <Col sm={6} xl={5}>
                                        <div
                                            className={"d-flex justify-content-center align-items-center h-100 flex-column"}>
                                            <Button
                                                variant={"primary"}
                                                href={"https://www.instagram.com/stout.bread/"}
                                                className={"fw-bold float-end w-100 mt-1 mt-lg-0"}
                                            >
                                                DM to Order
                                                <TbMessage
                                                    size={20}
                                                    className={"ms-2 mb-1"}
                                                />
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}