import React, { Component } from "react";
import SmartGift from "../ethereum/smartgift";
import MerchantItem from "./MerchantItem";

const MerchantList = props => {
  let i = 0;
  const merchantItems = props.merchants.map(merchant => {
    i++;
    return (
      <MerchantItem
        onMerchantSelect={props.onMerchantSelect}
        key={i}
        merchant={merchant}
      />
    );
  });

  return <ol>{merchantItems}</ol>;
};

export default MerchantList;
