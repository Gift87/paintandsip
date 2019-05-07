import React from 'react';
import './App.css';
import axios from "axios";
import Events from "./Component/event";

class App extends React.Component {
  showList = () => {
    // eslint-disable-next-line
    var queryURL =
      "https://private-anon-bdf258b975-eventbriteapiv3public.apiary-proxy.com/v3/events/search/?q=paint+and+sip&location.address=256+S+Locust+St%2C+Inglewood%2C+CA+90301&token=BWHRJXJWAJAHGJ5VN2O2";
    axios
      .get(queryURL)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="App-header">
            <p className="Name">Paint and Sip L.A.</p>
            <h4>
              <Events></Events>
            </h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default App;
