import React from "react";
import { TextField, ITextFieldStyles } from "@fluentui/react/lib/TextField";
import { Stack } from "@fluentui/react";
import "./Paydetail.css";

function Paydetail() {
  const textFieldStyles: Partial<ITextFieldStyles> = {
    fieldGroup: { width: 400 },
  };
  const textFieldCurrency: Partial<ITextFieldStyles> = {
    fieldGroup: { width: 200 },
  };

  return (
    <section className="header">
      <div className="header-heading">
        Paydetail details for taxes / surcharges
      </div>
      <div className="wrapper">
        <Stack className="textbox-list">
          <TextField
            label="Payment Mode"
            placeholder="Recharge"
            styles={textFieldStyles}
          />
          <TextField
            label="Foc control code"
            placeholder="123456789"
            styles={textFieldStyles}
          />
        </Stack>
        <Stack className="textbox-details">
          <TextField
            label="Amount ($)"
            placeholder="43"
            styles={textFieldStyles}
          />
          <TextField
            label="Currency"
            placeholder="SGD"
            styles={textFieldCurrency}
          />
          <TextField
            label="Cost centre"
            placeholder="234234"
            styles={textFieldStyles}
          />
          <TextField
            label="Account Code"
            placeholder="4321"
            styles={textFieldStyles}
          />
        </Stack>
      </div>
    </section>
  );
}

export default Paydetail;
