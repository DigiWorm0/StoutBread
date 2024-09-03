import HeroHeader from "../components/Hero/HeroHeader.tsx";
import LatestPostsContainer from "../components/LatestPostsContainer.tsx";
import MenuContainer from "../components/MenuContainer.tsx";
import Footer from "../components/Footer.tsx";
import ApparelContainer from "../components/ApparelContainer.tsx";
import EventDispatcher from "../components/Events/EventDispatcher.tsx";

export default function Home() {
    return (
        <>
            <HeroHeader/>
            <MenuContainer/>
            <ApparelContainer/>
            <LatestPostsContainer/>
            <Footer/>
            <EventDispatcher/>
        </>
    );
}