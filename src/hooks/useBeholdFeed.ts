import React from "react";
import { BeholdFeed } from "../types/BeholdPost";

const BEHOLD_API_URL = "https://feeds.behold.so/eaiDUEa4XKjzBEZVxTF7";

export default function useBeholdFeed() {
    const [posts, setPosts] = React.useState<BeholdFeed>([]);

    React.useEffect(() => {
        fetch(BEHOLD_API_URL)
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    return posts;
}