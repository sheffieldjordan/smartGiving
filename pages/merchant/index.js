import React, { Component } from "react";
import Layout from "../../components/Layout";
import web3 from "../../ethereum/web3";
import Bid from "../../components/BidTwo";
import { Container } from "semantic-ui-react";

// import './App.css'

class Merchant extends Component {
  render() {
    return (
      <Layout>
        <div className="bid">
          <Container>
            <Bid />
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Merchant;
