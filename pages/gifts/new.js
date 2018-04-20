import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Button, Form, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Link, Router } from "../../routes";

class GiftNew extends Component {
  state = {
    expiration: "",
    recipient: ""
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createSmartGift(this.state.expiration * 24 * 60 * 60)
        .send({
          from: accounts[0]
        });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Form>
          <Form.Field>
            <Input label="Amount in Ether" />

            <Button primary>Create Smart Gift</Button>
          </Form.Field>
        </Form>
      </Layout>
    );
  }
}
export default GiftNew;
