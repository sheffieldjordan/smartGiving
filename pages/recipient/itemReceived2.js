import React, { Component } from "react";
import { Button, Card, Input, Container } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import SmartGift from "../../ethereum/smartgift";
import Layout from "../../components/Layout";

class ItemReceived extends Component {
  state = {
    errorMessage: "",
    message: ""
  };
  static async getInitialProps(props) {
    const giftAddress = "0xF7277A10450F61AC86FDCDEb9B14F001888aA78D";

    return {
      giftAddress
    };
  }

  itemReceived = async () => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    console.log("state set");

    try {
      const gift = SmartGift(this.props.giftAddress); // the gift has to come from Mongo or React Router
      console.log(`gift: ${gift}`);
      const accounts = await web3.eth.getAccounts();
      const recipientReceivesItem = await gift.methods
        .recipientReceivesItem()
        .send({
          from: accounts[0],
          gas: 1000000
        });
      console.log(recipientReceivesItem);
      this.setState({
        message: "Transaction Validated! Thanks!"
      });
    } catch (err) {
      this.setState({ errorMessage: err.message.slice(0, 80) });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <div className="item-received">
          <Card fluid>
            <Card.Content header={"Your SmartGift has been shipped!"} />
            <Card.Content
              header={
                "After receiving the item, please update the SmartGift Contract status below. Please leave any relevant comments too."
              }
              description={
                "This is required to continue using the SmartGiving platform and to maintain your Recipient Reputation."
              }
            />
          </Card>
          <Button positive onClick={() => this.itemReceived()}>
            Item Received
          </Button>
          <Button.Group>
            <Button negative onClick={() => this.itemMissing()}>
              Item Missing
            </Button>
            <Button.Or />
            <Button negative onClick={() => this.itemDamaged()}>
              Item Damaged
            </Button>
          </Button.Group>

          <p>{this.state.errorMessage}</p>
          <h3>{this.state.message}</h3>
        </div>
      </Layout>
    );
  }
}

export default ItemReceived;
