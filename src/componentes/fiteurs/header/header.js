import React    from "react";
import template from "./header.js";

class header extends React.Component {
  render() {
    return template.call(this);
  }
}

export default header;
