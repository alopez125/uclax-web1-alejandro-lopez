/** @format */

import styled from "styled-components";

import Inset from "@/Common/PagesLayout/Inset.jsx";
import Slideshow from "./Slideshow/Slideshow";
import Tabbed from "./Tabbed/Tabbed";
import Calendar from "./Calendar/Calendar";

const Home = () => {
    return (
        <HomeStyled>
            <h1>Home</h1>
            <Slideshow />
            <Inset>
                <Tabbed />
            </Inset>
            <Inset>
                <Calendar />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }
`;
