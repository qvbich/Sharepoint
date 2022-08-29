import React from "react";
import { TextField, ITextFieldStyles } from "@fluentui/react/lib/TextField";
import { Stack } from "@fluentui/react";
import "./Mystyle.scss";

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
        <Stack className="textfield-list">
          <TextField
            required
            label="Payment Mode"
            placeholder="Recharge"
            styles={textFieldStyles}
          />
          <TextField
            required
            label="Foc control code"
            placeholder="123456789"
            styles={textFieldStyles}
          />
        </Stack>
        <Stack className="textbox-details">
          <TextField
            required
            label="Amount ($)"
            type="number"
            placeholder="43"
            styles={textFieldStyles}
          />
          <TextField
            required
            label="Currency"
            placeholder="SGD"
            styles={textFieldCurrency}
          />
          <TextField
            label="Cost centre"
            type="number"
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
