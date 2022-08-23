import React from "react";
import { TextField, ITextFieldStyles } from "@fluentui/react/lib/TextField";
import { Stack } from "@fluentui/react";
import {
  Dropdown,
  IDropdownStyles,
  IDropdownOption,
} from "@fluentui/react/lib/Dropdown";
import "./Mystyle.scss";

function Payment() {
  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 400 },
  };

  const dropdown: Partial<IDropdownStyles> = {
    dropdown: { width: 200 },
  };

  const textFieldStyles: Partial<ITextFieldStyles> = {
    fieldGroup: { width: 400 },
  };
  const options1: IDropdownOption[] = [
    { key: "Recharge", text: "Recharge" },
    { key: "Charge", text: "Charge" },
  ];

  const options2: IDropdownOption[] = [
    { key: "FOC 1", text: "FOC 1" },
    { key: "FOC 2", text: "FOC 2" },
  ];

  const options3: IDropdownOption[] = [
    { key: "Option-1", text: "Option-1" },
    { key: "Option-2", text: "Option-2" },
  ];

  return (
    <section className="header">
      <div className="header-heading">Payment details for fare</div>
      <div className="wrapper">
        <Stack className="dropdown-list">
          <Dropdown
            placeholder="Select one below"
            label="Payment Mode"
            options={options1}
            styles={dropdownStyles}
          />
          <Dropdown
            placeholder="SELECT FOR CODE"
            label="For Control Code"
            options={options2}
            styles={dropdownStyles}
          />
        </Stack>
        <Stack className="texbox-list">
          <TextField label="Amount ($)" styles={textFieldStyles} />
          <Dropdown
            placeholder="SELECT CURRENCY"
            label="Current"
            options={options3}
            styles={dropdown}
          />
          <TextField label="Cost Centre" styles={textFieldStyles} />
          <TextField label="Account Code" styles={textFieldStyles} />
        </Stack>
      </div>
    </section>
  );
}

export default Payment;
