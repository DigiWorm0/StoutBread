import {ShopItemID} from "../types/ShopItem.ts";
import ImageGallery from "react-image-gallery";
import React from "react";
import useShopItem from "../hooks/useShopItem.ts";

export interface ItemGalleryProps {
    itemID?: ShopItemID;
}

export default function ItemGallery(props: ItemGalleryProps) {
    const item = useShopItem(props.itemID);

    const items = React.useMemo(() => {
        if (!item) return [];
        return item.imageIDs.map((imageID) => ({
            original: `/images/shop/${imageID}.jpg`,
            originalAlt: item.name,
            thumbnail: `/images/shop/${imageID}.jpg`,
        }));
    }, [item]);

    return (
        <div className={"d-flex justify-content-center align-items-center h-100"}>
            <ImageGallery
                items={items}
                slideDuration={200}
                autoPlay={false}
                showPlayButton={false}
                showFullscreenButton={true}
                showNav={true}
                showThumbnails={false}
                showBullets={true}
                lazyLoad={false}
            />
        </div>
    );
}