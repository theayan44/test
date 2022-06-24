import React from "react";
import Header from "../../components/Header/Header";
const Recruitment = ({ data }) => {
  return (
    <>
      <div className="content-text">
        {!!data && !!data.first_name && !!data.last_name
          ? data.first_name + " " + data.last_name
          : ""}
      </div>
    </>
  );
};
export default Recruitment;
