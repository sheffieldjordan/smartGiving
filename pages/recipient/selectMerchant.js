import React, { Component } from "react";
import web3 from "../../ethereum/web3";
import Layout from "../../components/Layout";
import MerchantList from "../../components/MerchantList";
import SmartGift from "../../ethereum/smartgift";
import { Card, Segment } from "semantic-ui-react";
// import './App.css'

class SelectMerchant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merchants: [
        "0xfAA7541C5cBe22E4518736D2b5fC34D07347eE45",
        "0x68009930D2E4a9A0A4b53484AED8289c86802Ae5",
        "0xBae217221CbFE934d8e190c8f0A836Cd44a7ed07",
        "0x038740aE426fa19758f6B77E7A92d4F4169e1772"
      ], //this needs to come from MongoDB
      targetGift: SmartGift("0xF7277A10450F61AC86FDCDEb9B14F001888aA78D"), // comes from MongoDB, or React Router
      selectedMerchant: "",
      message: "",
      errorMessage: ""
    };
  }
  // addMerchant(merchant) {
  // 	const merchants = ['Morgan', 'Steve', 'Paul']
  // 	this.setState({ merchants })
  // }

  onMerchantSelect = async selectedMerchant => {
    event.preventDefault();
    this.setState({
      selectedMerchant: selectedMerchant
    });

    /* wrap Web3 state-changing functions in a try/catch statement to handle errors */
    try {
      const gift = SmartGift("0xF7277A10450F61AC86FDCDEb9B14F001888aA78D");
      const accounts = await web3.eth.getAccounts();
      const selectMerchant = await gift.methods
        .recipientPicksMerchant(this.state.selectedMerchant)
        .send({
          from: accounts[0],
          gas: 1000000
        });

      this.setState({
        message: `You've selected ${this.state.selectedMerchant} `
      });
    } catch (err) {
      this.setState({ errorMessage: err.message.slice(0, 80) });
    }

    this.setState({ loading: false, value: "" });
  };

  render() {
    const { merchants } = this.state;
    const { addMerchant } = this;
    return (
      <Layout>
        <div className="select-merchant">
          <Card fluid>
            <Card.Content header={"Select a merchant below"} />
          </Card>
          <Segment>
            <MerchantList
              merchants={merchants}
              onMerchantSelect={selectedMerchant =>
                this.onMerchantSelect(selectedMerchant)
              }
            />
          </Segment>
          <div>{this.state.message}</div>
          <div>{this.state.errorMessage}</div>
        </div>
      </Layout>
    );
  }
}

export default SelectMerchant;
