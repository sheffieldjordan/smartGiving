import React, { Component } from "react";
import { Button, Card, Input, Container } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import factory from "../ethereum/factory";

class Donate extends Component {
  state = {
    value: "",
    errorMessage: "",
    loading: false,
    recipientAddress: "0x68009930D2E4a9A0A4b53484AED8289c86802Ae5", // this must update based on what the donor is looking at
    expiry: "",
    donorMsg: "enter message here", //
    message: "",
    giftInstance: "",
    recipientMessage: ""
  };
  async componentDidMount() {}

  onSubmit = async event => {
    event.preventDefault();
    this.setState({
      message: "Waiting on transaction validation...",
      loading: true,
      errorMessage: ""
    });

    /* wrap Web3 state-changing functions in a try/catch statement to handle errors */
    try {
      const accounts = await web3.eth.getAccounts();
      const giftInstance = await factory.methods
        .createSmartGift(
          this.state.recipientAddress,
          this.state.expiry,
          this.state.donorMsg
        )
        .send({
          from: accounts[0],
          value: web3.utils.toWei(this.state.value, "ether"),
          gas: 1000000
        });

      this.setState({
        giftInstance: giftInstance.events.GiftCreated.returnValues["0"],
        message: `You've created a Gift for ${
          this.state.recipientAddress
        } worth up to ${this.state.value} ether at address`
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: "" });
  };
  render() {
    const p =
      "Please input your maximum donation amount and a message below. \n    Merchants will bid to fulfill this gift. The Recipient will be\n    required to select one of the lowest three bids.";
    return (
      <div>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />

        <Card fluid>
          <Card.Content header="Finalize your Donation" />
          <Card.Content
            description={"Recipient's Address :" + this.state.recipientAddress}
            meta={"Recipient''s Request:" + this.state.recipientMessage}
          />

          <Card.Content description={p} />
        </Card>

        <Card fluid>
          <Card.Content header={"Enter details Below"} />
          <form onSubmit={this.onSubmit}>
            <div>
              <Input
                label="Donation Amount"
                name="value"
                value={this.state.value}
                onChange={event => this.setState({ value: event.target.value })}
              />

              <div>
                <br />
                <Input
                  label="Donor Message"
                  name="donorMsg"
                  placeholder={this.state.donorMsg + "..."}
                  onChange={event =>
                    this.setState({ donorMsg: event.target.value })
                  }
                />
              </div>
              <br />
            </div>
            <Button fluid primary>
              Donate
            </Button>
          </form>
        </Card>

        <h1>{this.state.message}</h1>
        <p>{this.state.giftInstance}</p>
      </div>
    );
  }
}
export default Donate;
