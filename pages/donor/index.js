import React, { Component } from "react";
import web3 from "../../ethereum/web3";
import Donate from "../../components/Donatetwo";
import { Button, Container } from "semantic-ui-react";
import Layout from "../../components/Layout";

// import './App.css'

class Donor extends Component {
  render() {
    return (
      <Layout>
        <div className="App">
          <Container>
            <Donate />
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Donor;
