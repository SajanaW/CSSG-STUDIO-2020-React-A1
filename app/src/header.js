import React, { Component } from "react";

// This is one way to write CSS 
// Read more about it here:
//https://emotion.sh/docs/introduction
// For this assignment we recommend using emotion. 
// The header div below has been styled using the canonical emotion syntax
// Feel free to copy and reuse in all your components.
import { css } from "emotion";

//Here is all the image files that you need
import title_img from "./images/logo-teamtrees-full-alt.svg";
import astronaut from "./images/astronaut-sign.svg";
import spaceship from "./images/spaceship.svg";
import underline from "./images/counter-underline-light.svg";

class Header extends Component {
  render() {
    return (
      <div
        className={css`
            font-weight: 600;
            color: #273654;
            background-color: #f6f6f4;
            padding: 1.5rem;
          `}
      > Header </div>
    );
  }
}

export default Header;
