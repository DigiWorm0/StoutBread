import {EventID} from "../../types/EventItem.ts";
import useEvent from "../../hooks/useEvent.ts";
import {Button, Modal, ModalHeader} from "react-bootstrap";
import {AiOutlineClose} from "react-icons/ai";

export interface EventModalProps {
    eventID: EventID;
    isVisible: boolean;
    onDismiss: () => void;
}

export default function EventModal(props: EventModalProps) {
    const {isVisible, onDismiss} = props;
    const event = useEvent(props.eventID);

    if (!event)
        return null;
    return (
        <Modal
            show={isVisible}
            onHide={onDismiss}
            centered
            fullscreen={"sm-down"}
        >
            <ModalHeader className={"p-0 d-block"}>
                <Button
                    variant={"btn"}
                    onClick={onDismiss}
                    className={"float-end"}
                >
                    <AiOutlineClose
                        size={32}
                    />
                </Button>

            </ModalHeader>
            <img
                src={event.imageURL}
                alt={event.title}
                className={"img-fluid rounded"}
            />
        </Modal>
    )
}