import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Link } from "../routes";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";

class GiftIndex extends Component {
  componentDidMount() {}

  // static async getInitialProps() {
  // 	// const gifts = await factory.methods.
  // 	const completedGifts = await factory.methods.completedGifts().call()
  //
  // 	return {
  // 		campaigns: completedGifts
  // 	}
  // }

  render() {
    return (
      <Layout>
        <div>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          <Link route="/merchant/">
            <a>
              <Button content="Merchant" primary />
            </a>
          </Link>
          <Link route="/recipient/">
            <a>
              <Button content="Recipient" primary />
            </a>
          </Link>
          <Link route="/donor/">
            <a>
              <Button content="Donor" primary />
            </a>
          </Link>
        </div>
      </Layout>
    );
  }
}
export default GiftIndex;
