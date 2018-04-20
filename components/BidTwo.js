import React, { Component } from "react";
import { Card, Input, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import SmartGift from "../ethereum/smartgift";

class Bid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bid: "",
      lowestBid: "[Amount from MongoDB]",
      errorMessage: "",
      loading: false,
      message: "",
      giftAddress: "0xf7277a10450f61ac86fdcdeb9b14f001888aa78d",
      recipientAddress: "[Address from MongoDB]",
      recipientMessage: "[Message from MongoDB]"
    };
  }

  onSubmit = async event => {
    var x = document.forms["bidForm"]["bidField"].value;
    if (x == "" || isNaN(x) || x == 0) {
      alert("Please enter a number greater than 0 in order to bid.");
      return false;
    }

    event.preventDefault();
    this.setState({
      message: "Waiting on bid validation...",
      loading: true,
      errorMessage: ""
    });

    /* wrap Web3 state-changing functions in a try/catch statement to handle errors */
    try {
      const targetGift = SmartGift(this.state.giftAddress);
      const accounts = await web3.eth.getAccounts();
      const bidEntry = await targetGift.methods
        .merchantBids(web3.utils.toWei(this.state.bid, "ether"))
        .send({
          from: accounts[0],
          gas: 1000000
        });

      this.setState({
        message: `You've successfully bid ${this.state.bid} ether.`
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: "" });
  };
  render() {
    /* the {this.onSubmit} below is without parentheses because we dont' want it
     to be called on initial rendertime; we want to pass a reference on the
     function so we can call it in the future
     */
    return (
      <div>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <Card fluid>
          <Card.Content textAlign="center" header="Bid on the following Gift" />
          <Card.Content
            header={"Gift's Address :" + this.state.giftAddress}
            description={"Recipient's Address:" + this.state.recipientAddress}
          />

          <Card.Content
            header={"Recipient''s Request:" + this.state.recipientMessage}
            description={
              "Please input your lowest bid below. The Recipient will be required to select one of the lowest three bids. Currently the lowest bid is: \n" +
              this.state.lowerBid
            }
          />
        </Card>

        <Card fluid>
          <Card.Content header={"Enter details Below"} />
          <form onSubmit={this.onSubmit}>
            <div>
              <Input
                label="Bid Amount"
                name="value"
                value={this.state.bid}
                onChange={event => this.setState({ bid: event.target.value })}
              />
            </div>
            <br />
            <Button fluid primary>
              Bid
            </Button>
          </form>
        </Card>
      </div>
      // <p></p>
      // <hr />
      // <form name="bidForm" onSubmit={this.onSubmit}>
      //   <h4>Enter details below</h4>
      //   <div>
      //     <label>Bid Amount: </label>
      //     <input
      //       name="bidField"
      //       value={this.props.bid}
      //       onChange={event => this.setState({ bid: event.target.value })}
      //     />
      //   </div>
      //   <p id="demo" />
      //   <button>Bid</button>
      // </form>
      // <hr />
      // <h1>{this.state.message}</h1>
    );
  }
}

export default Bid;
