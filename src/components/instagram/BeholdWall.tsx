import useBeholdFeed from "../../hooks/useBeholdFeed";
import BeholdThumbnail from "./BeholdThumbnail";

export default function BeholdWall() {
    const posts = useBeholdFeed();

    return (
        <div className="behold-wall">
            {posts.map((post) => (
                <BeholdThumbnail
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    );
}