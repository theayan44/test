import React from "react";

const Header = (props) => {
  const [id, setId] = React.useState("");
  const handleChange = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setId(e.target.value);
  };
  const handleSubmit = () => {
    if (!!id && id >= 1 && id <= 12) {
      props.handleSearch(id);
    } else {
      alert("Please enter ID beteween 1 to 12!!");
    }
  };
  return (
    <div className="header-box">
      <span>
        <input
          className="input-box"
          type="number"
          width="250px"
          onChange={(e) => handleChange(e)}
        />
        <button id="submit-button" onClick={() => handleSubmit()}>
          Submit
        </button>
      </span>
    </div>
  );
};
export default Header;
