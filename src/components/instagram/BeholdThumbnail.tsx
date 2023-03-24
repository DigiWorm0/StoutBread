import React from "react";
import BeholdPost from "../../types/BeholdPost";

interface BeholdThumbnailProps {
    post: BeholdPost;
}

export default function BeholdThumbnail(props: BeholdThumbnailProps) {
    const [isHovered, setIsHovered] = React.useState(false);

    const { post } = props;

    return (
        <div
            className="behold-thumbnail"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={post.thumbnailUrl}
                alt={post.caption}
                className="behold-thumbnail-image"
            />
        </div>
    );
}