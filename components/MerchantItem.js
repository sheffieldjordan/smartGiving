import React from "react";
import { Button, List } from "semantic-ui-react";

const MerchantItem = ({ merchant, onMerchantSelect }) => {
  return (
    <List>
      <Button
        inverted
        color="green"
        fluid
        onClick={() => onMerchantSelect(merchant)}
        className="merchant-name"
      >
        {merchant}
      </Button>
    </List>
  );
};

export default MerchantItem;
