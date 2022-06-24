import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    name: "Description",
    link: "/"
  },
  {
    name: "Name",
    link: "/name"
  },
  {
    name: "Email",
    link: "/email"
  }
];

const Dashboard = ({ children, data }) => {
  const location = useLocation();
  return (
    <div className="dashboard">
      <aside className="navigation">
        <div className="logo">
          {!!data && !!data.avatar ? (
            <img src={data.avatar} alt="avatar" />
          ) : (
            <></>
          )}
        </div>
        <div>
          {navItems.map((navItem, Index) => (
            <Link
              to={navItem.link}
              key={Index}
              className={`nav-items ${
                location.pathname === navItem.link ? "selected" : "nav-items"
              } `}
            >
              <div>{navItem.name}</div>
            </Link>
          ))}
        </div>
      </aside>
      <section>{children}</section>
    </div>
  );
};

export default Dashboard;
