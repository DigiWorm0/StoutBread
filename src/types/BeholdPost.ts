export default interface BeholdPost {
    id: string;
    mediaUrl: string;
    permalink: string;
    caption: string;
    prunedCaption: string;
    hashtags: string[];
    mentions: string[];
    mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    isReel: boolean;
    thumbnailUrl: string;
    timestamp: string;
    colorPalette: {
        dominant: string;
        muted: string;
        vibrant: string;
        vibrantLight: string;
        mutedLight: string;
        vibrantDark: string;
        mutedDark: string;
    };
    dimensions: {
        width: number;
        height: number;
    };
    children: {
        id: string;
        mediaUrl: string;
        type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    }[];
}

export type BeholdFeed = BeholdPost[];