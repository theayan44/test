import React from "react";
import Header from "../../components/Header/Header";
const Calendar = ({ data }) => {
  return (
    <>
      <div className="content-text">
        {!!data && !!data.first_name
          ? data.first_name + ", Welcome to the dashboard."
          : ""}
      </div>
    </>
  );
};
export default Calendar;
