import React from 'react';
import { Modal } from 'react-bootstrap';
import Gallery from '../layout/Gallery';

interface AdvertModalProps {
    title?: string;
    imageURLs: string[];
    small?: boolean;
}

export default function AdvertModal(props: AdvertModalProps) {
    const [isVisible, setIsVisible] = React.useState(true);

    return (
        <Modal
            show={isVisible}
            onHide={() => setIsVisible(false)}
            size={props.small ? "sm" : "lg"}
        >
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                <Gallery
                    galleryItems={props.imageURLs.map((url) => ({ src: url }))}
                    carouselProps={{
                        interval: 4000,
                        className: "rounded-bottom"
                    }}
                />
            </Modal.Body>
        </Modal>
    );
}