import HeroHeader from "../components/HeroHeader.tsx";
import LatestPostsContainer from "../components/LatestPostsContainer.tsx";
import MenuContainer from "../components/MenuContainer.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
    return (
        <>
            <HeroHeader />
            <MenuContainer />
            <LatestPostsContainer />
            <Footer />
        </>
    );
}