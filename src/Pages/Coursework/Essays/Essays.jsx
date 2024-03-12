/** @format */

import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS and Javascript`}
            >
                <ul>
                    <li>
                        <b>HTML:</b> Hypertext Markup Language: Marks up
                        content, defines the content
                    </li>
                    <li>
                        <b>CSS:</b> Cascading Styles Sheets; Aesthetics and
                        visual components, layout
                    </li>
                    <li>
                        <b>JavaScript:</b> functionality/behavior interactive.
                        DOM Manipulation. event listeners, state
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q2: What is the difference between Git and Github`}
            >
                <ul>
                    <li>
                        <b>Git:</b> version control system, tracking changes,
                        feature branches, multiple developers to work with each
                        other on the same code without stepping on each others
                        toes.
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>Github:</b> web-based platform built around git to
                        collaborate, store repos, and social interaction, code
                        reviews, tracking and management
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q3: What is the difference between JQuery and React?`}
            >
                <ul>
                    <li>
                        <b>JQuery:</b> simplifies DOM manipulation and ensures
                        cross-browser compatibility, JS event handling
                        simplified dom element manipulation and provide widgets.
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>React:</b> is a JavaScript library that works with
                        HTML, CSS, and JavaScript to create dynamic and
                        responsive user interfaces. React focuses on creating
                        dynamic, efficient, and maintainable user interfaces
                        using a component-based architecture and virtual DOM.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q4: What is the difference between a Front-End and Back-End Developer?`}
            >
                <ul>
                    <li>
                        <b>Frontend Development:</b> focuses on creating fully
                        functional, responsive, and well-designed user
                        interfaces. Frontend developers know HTML, CSS, and
                        JavaScript.
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>Backend Development:</b> involves creating reliable
                        architecture that supports frontend development.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q5: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                <ul>
                    <li>
                        <b>Root Relative:</b> Is writing links from the root of
                        a folder (or domain.) import “../Common/css/global.scss”
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>Document Relative:</b> “./ ” looking in the same
                        directory, ../ up a directory ../../../
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q6: What is the difference between jpg, gif, png and svg images?`}
            >
                <ul>
                    <li>
                        <b>jpg</b> stands for Joint Photographic Experts Group.
                        Best used for photographs. Jpgs take all the information
                        and compress it into smaller file sizes without
                        degrading image quality.
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>PNG</b> stands for Portable Networks Graphics (Who
                        comes up with these names?!) and like the name implies,
                        it’s ideal for web graphics. If you have a logo, social
                        media graphic, illustration, etc., the png format is a
                        good bet for retaining maximum image quality.
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>Gif</b> stands for Graphics Interchange Format and
                        it’s best known for supporting animation.
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>svg</b> stands for Scalable Vector Graphics. All the
                        other file formats we’ve covered are raster-based,
                        meaning they look blurry if enlarged beyond their
                        original size. Svg files are vector-based, meaning you
                        can scale them to any size without any loss in quality.
                        No other file type looks as sharp as an svg.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q7: Define the following Agile roles: Product Manager, Product Owner, Business Analyst, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps`}
            >
                <ul>
                    <li>
                        <b>Product Manager</b> transforms market research and
                        business requirements into product vision and roadmap.
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>Product Owner</b> transforms product vision and
                        roadmap into a backlog and creates actionable
                        development tasks.
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>Business Analyst</b> analyze business needs align
                        with business objectives
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>Scrum Master</b> oversees scrum ceremonies (agile)
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>UX Designer</b> focus on user experience, user
                        stories, prototypes
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>Developer/engineer</b> writing coed and implementing
                        functionality of product
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>QA/SDET</b> tests the app to ensure integrity for
                        production releases identifies bugs and severity, may
                        also create automated tests for common flaws
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>DevOps</b> responsible for setting up servers to meet
                        application needs and continuous integration and
                        delivery (CICD) for accelerated delivery of software
                        updates
                    </li>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
