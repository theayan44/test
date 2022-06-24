import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard-layout/Dashboard-layout";
import Calendar from "./screen/calendar/Calendar";
import Onboarding from "./screen/onboarding/Onboarding";
import Recruitment from "./screen/Recruitment/Recruitment";
import axios from "axios";
import Header from "./components/Header/Header";

const Controller = () => {
  const [details, setDetails] = React.useState();
  const [id, setId] = React.useState("");
  const handleSubmit = (e) => {
    debugger;
    setId(e);
  };
  useEffect(() => {
    if (!!id) {
      axios.get("https://reqres.in/api/users/" + id).then((res) => {
        console.log(res.data);
        if (!!res) {
          setDetails(res.data.data);
        }
      });
    }
  }, [id]);
  return (
    <>
      <Header handleSearch={(e) => handleSubmit(e)} />
      <Router>
        {!!details ? (
          <Dashboard data={details}>
            <Switch>
              <Route
                path="/name"
                render={(props) => <Recruitment data={details} />}
                data={details}
              />
              <Route
                path="/email"
                render={(props) => <Onboarding data={details} />}
                data={details}
              />
              <Route
                path="/"
                render={(props) => <Calendar data={details} />}
                data={details}
              />
            </Switch>
          </Dashboard>
        ) : (
          <div>Please search</div>
        )}
      </Router>
    </>
  );
};

export default Controller;
