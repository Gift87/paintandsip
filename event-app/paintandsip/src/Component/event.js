import React from "react";
import axios from "axios";

class Events extends React.Component {
  state = {
    q: []
  };
  componentDidMount() {
    axios
      .get(
        `https://www.eventbriteapi.com/v3/events/search/?q=paint+and+sip&location.address=256+S+Locust+St%2C+Inglewood%2C+CA+90301&location.within=15mi&token=BWHRJXJWAJAHGJ5VN2O2`
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ q: res.data.events });
      });
  }
  render() {
    return (
      <>
        {this.state.q.map(events => (
          <ul>
            <h1 className="Title" key={events.id}>{events.name.text}</h1>
            <a href={events.url}> <p className="link" >{events.url}</p></a> 
            <div>{events.description.text}</div>
             
            
        
            <br />
          </ul>
        ))}
      </>
    );
  }
}
export default Events;