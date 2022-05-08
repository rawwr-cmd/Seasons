import React from "react";
import ReactDOM from "react-dom/client";
import DisplaySeason from "./DisplaySeason";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.watchPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <DisplaySeason latitude={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return <div>LOADING!</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
