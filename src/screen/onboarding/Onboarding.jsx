import React from "react";
import Header from "../../components/Header/Header";
const Onboarding = ({ data }) => {
  return (
    <>
      <div className="content-text">
        {!!data && !!data.email ? data.email : ""}
      </div>
    </>
  );
};
export default Onboarding;
