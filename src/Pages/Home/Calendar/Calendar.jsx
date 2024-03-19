/** @format */

import styled from "styled-components";
import { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <CalendarStyled>
            <inset>
                <h2>Hours of Operation</h2>
            </inset>
            <div className="my-calendar">
                <ReactCalendar
                    onChange={onChange}
                    showWeekNumbers
                    value={value}
                />
            </div>
        </CalendarStyled>
    );
};

export default Calendar;

const CalendarStyled = styled.div`
    text-align: center;

    h2 {
        color: brown;
    }

    .my-calendar {
        margin: 20px 0px;
        display: flex;
        justify-content: center;
    }
`;
