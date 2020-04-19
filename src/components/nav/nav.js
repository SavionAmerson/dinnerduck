import React from "react";
import "./navbar.css";

class Nav extends React.Component {
  render() {
    return (
        <div>
            <footer class="navbar">
                <ul class="nav-ul">
                    <li class="home">Step 1</li>
                    <li class="creds">Step 2</li>
                    <li class="how-many">Step 3</li>
                    <li class="budget">Step 4</li>
                    <li class="recoms">Step 5</li>
                </ul>
            </footer>
        </div>
    );
  }
}

export default Nav;
