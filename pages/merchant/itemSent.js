import React, { Component } from "react";
import web3 from "../../ethereum/web3";
import { Button, Card, Input, Container } from "semantic-ui-react";
import SmartGift from "../../ethereum/smartgift";
import Layout from "../../components/Layout";

class ItemSent extends Component {
  state = {
    loading: false
  };

  itemShipped = async () => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    console.log("state set");

    try {
      const gift = SmartGift("0xF7277A10450F61AC86FDCDEb9B14F001888aA78D"); // the gift has to come from Mongo or React Router
      console.log(`gift: ${gift}`);
      const accounts = await web3.eth.getAccounts();
      const merchantShipsItem = await gift.methods.merchantShipsItem().send({
        from: accounts[0],
        gas: 1000000
      });

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
        <div className="item-sent">
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          <h3 />
          <Container>
            <Card fluid>
              <Card.Content
                header={
                  "Congratulations! You''ve been selected to fulfill this SmartGift!"
                }
                description={
                  "[your bid amount] Ether has been sent to [your Ethereum address]. After shipping the item, please update the SmartGift Contract by clicking below."
                }
              />

              <Card.Content
                description={
                  "This is required to continue using the SmartGiving platform and to maintain your Merchant Reputation."
                }
              />

              <Button primary onClick={() => this.itemShipped()}>
                Item Sent
              </Button>
            </Card>
            <Card fluid>
              <Card.Content
                header={this.state.errorMessage}
                description={this.state.message}
              />
            </Card>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default ItemSent;
