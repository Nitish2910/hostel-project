import React from "react";
import Notice from "./homepage_comp/Notice";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homeflex">
        <div className="home-cotent-1">
          <p> plz provide suggestions what to present here here!!!!</p>
          <p> plz provide suggestions what to present here here!!!!</p>
          <p> plz provide suggestions what to present here here!!!!</p>
          <p> plz provide suggestions what to present here here!!!!</p>
          <p> plz provide suggestions what to present here here!!!!</p>
          <p> plz provide suggestions what to present here here!!!!</p>
        </div>
        <div className="home-content-2">
          <Notice />
        </div>
      </div>
    );
  }
}

export default Homepage;
