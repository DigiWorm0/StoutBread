import ImageGallery from "react-image-gallery";
import React from "react";
import ShopItem from "../types/ShopItem.ts";

export interface ItemGalleryProps {
    item: ShopItem;
    selectedTypeID: string;
    setSelectedTypeID: (typeID: string) => void;
}

export default function ItemGallery(props: ItemGalleryProps) {
    const ref = React.useRef<ImageGallery>(null);

    // Scroll to selected type
    const index = props.item.images.findIndex((image) => image.type === props.selectedTypeID);
    React.useEffect(() => {
        ref.current?.slideToIndex(index);
    }, [index]);

    // Update selected type when image is clicked
    const onChange = React.useCallback((index: number) => {
        const typeID = props.item.images[index].type;
        props.setSelectedTypeID(typeID);
    }, [props]);

    // Generate image gallery items
    const items = React.useMemo(() => {
        return props.item.images.map((image) => ({
            original: `/images/menu/${image.id}.jpg`,
            originalAlt: props.item.name,
            thumbnail: `/images/menu/${image.id}.jpg`,
        }));
    }, [props.item]);

    return (
        <div style={{ aspectRatio: "1/1", width: "100%" }}>
            <ImageGallery
                ref={ref}
                items={items}
                onBeforeSlide={onChange}
                slideDuration={200}
                autoPlay={false}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={true}
                showThumbnails={false}
                showBullets={true}
                lazyLoad={false}
                additionalClass={"rounded overflow-hidden"}
            />
        </div>
    );
}