import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { MINI_LOAF_PRICE, WHOLE_LOAF_PRICE } from "../types/Constants.ts";
import React from "react";
import ItemTypePicker from "./ItemTypePicker.tsx";
import ItemGallery from "./ItemGallery.tsx";
import ShopItem from "../types/ShopItem.ts";

export interface MenuItemModalProps {
    item: ShopItem;
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
}

export default function MenuItemModal(props: MenuItemModalProps) {
    const { isVisible, setIsVisible, item } = props;
    const [selectedTypeID, setSelectedTypeID] = React.useState<string>(item.types[0].id);

    const selectedType = item.types.find((type) => type.id === selectedTypeID);
    const nutritionURL = `/images/nutrition/${selectedType?.id}.png`;

    // Reset selected type when item changes
    React.useEffect(() => {
        setSelectedTypeID(item.types[0].id);
    }, [item]);

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
                            <ItemGallery
                                item={item}
                                selectedTypeID={selectedTypeID}
                                setSelectedTypeID={setSelectedTypeID}
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
                                {item.name}
                            </h1>

                            {/* Product Pricing */}
                            <h5 className={"mt-1 mb-2"}>
                                {selectedType?.customPrice ? (
                                    <span>
                                        {selectedType.customPrice}
                                    </span>
                                ) : (
                                    <span>
                                        ${MINI_LOAF_PRICE} Mini Loaf • ${WHOLE_LOAF_PRICE} Regular Loaf
                                    </span>
                                )}
                            </h5>

                            {/* Product Type Picker */}
                            {props.item.types.length > 1 ? (
                                <ItemTypePicker
                                    items={props.item.types}
                                    selectedID={selectedTypeID}
                                    onItemSelect={setSelectedTypeID}
                                />
                            ) : (
                                <hr />
                            )}

                            <Container>
                                <Row>
                                    {/* Product Description */}
                                    <Col>
                                        {selectedType?.description}
                                        {!selectedType?.noNutrition && (
                                            <>
                                                <br />
                                                <br />
                                                <a
                                                    href={nutritionURL}
                                                    target={"_blank"}
                                                >
                                                    Nutritional Information
                                                </a>
                                            </>
                                        )}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>

                                {/* Order Button */}
                                <Row>
                                    <Col></Col>
                                    <Col sm={4}>
                                        <Button
                                            variant={"primary"}
                                            href={"https://www.instagram.com/uwstoutbread/"}
                                            className={"fw-bold float-end w-100 mt-1 mt-lg-0"}
                                        >
                                            DM to Order &gt;
                                        </Button>
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