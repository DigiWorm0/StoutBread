import React from 'react';
import { CarouselProps } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

export interface GalleryItem {
    src: string;
    alt?: string;
    caption?: string;
    link?: string;
}

export interface GalleryProps {
    galleryItems: GalleryItem[];
    carouselProps?: CarouselProps;
    imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export default function Gallery(props: GalleryProps) {
    return (
        <Carousel
            {...props.carouselProps}
        >
            {props.galleryItems.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                        src={item.src}
                        alt={item.alt}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            filter: "blur(10px)",
                            zIndex: -1
                        }}
                    />
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <img
                            className="d-block w-100"
                            src={item.src}
                            alt={item.alt}
                            {...props.imgProps}
                        />
                    </a>
                    <Carousel.Caption>
                        <h3 style={{
                            textShadow: "0 0 15px black"
                        }}>
                            {item.caption}
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}