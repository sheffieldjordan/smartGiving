import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">Smart Giving</a>
      </Link>
      <Link route="/merchant">
        <a className="item">Merchants</a>
      </Link>
      <Link route="/recipient">
        <a className="item">Recipient</a>
      </Link>
      <Link route="/donor">
        <a className="item">Donor</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>

        <Link route="/gifts/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
