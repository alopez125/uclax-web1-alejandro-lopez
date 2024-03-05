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
                        <b>TBA</b> ...
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>TBA</b> ...
                    </li>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
