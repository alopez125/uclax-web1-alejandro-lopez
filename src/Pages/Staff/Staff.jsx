/** @format */

import styled from "styled-components";

import Inset from "@/Common/PagesLayout/Inset.jsx";

import StaffList from "./StaffList/StaffList";

const Staff = () => {
    return (
        <StaffStyled>
            <Inset>
                <h2>Staff</h2>
                <StaffList />
            </Inset>
        </StaffStyled>
    );
};

export default Staff;

const StaffStyled = styled.div`
    h2 {
        color: brown;
    }
`;
