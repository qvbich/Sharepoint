import { useState, useEffect } from "react";
import { TextField, ITextFieldStyles } from "@fluentui/react/lib/TextField";
import { Stack } from "@fluentui/react";
import {
  Dropdown,
  IDropdownStyles,
  IDropdownOption,
} from "@fluentui/react/lib/Dropdown";
import "./Mystyle.scss";
import { useDispatch, useSelector } from "react-redux";
import { fromSlice } from "../redux/reducer";
import { paymemtSelector } from "../redux/selectors";

function Payment() {
  const dispatch = useDispatch();
  let test = useSelector(paymemtSelector);
  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 400 },
  };

  const dropdown: Partial<IDropdownStyles> = {
    dropdown: { width: 200 },
  };

  const textFieldStyles: Partial<ITextFieldStyles> = {
    fieldGroup: { width: 400 },
  };

  const [selectMode, setSelectMode] = useState("");
  const handlePayment = (e: any, test: any) => {
    setSelectMode(test.key);
    sessionStorage.setItem("draft", test.key);
  };
  const options1: IDropdownOption[] = [
    { key: "Recharge", text: "Recharge" },
    { key: "Charge", text: "Charge" },
  ];

  const [selectCode, setSelectCode] = useState("");
  const handleCode = (e: any, test: any) => {
    setSelectCode(test.key);
    sessionStorage.setItem("selectCode", test.key);
  };
  const options2: IDropdownOption[] = [
    { key: "FOC 1", text: "FOC 1" },
    { key: "FOC 2", text: "FOC 2" },
  ];

  const [selectCurrent, setSelectCurrent] = useState("");
  const handleCurrent = (e: any, test: any) => {
    setSelectCurrent(test.key);
  };
  const options3: IDropdownOption[] = [
    { key: "Option-1", text: "Option-1" },
    { key: "Option-2", text: "Option-2" },
  ];

  const [amout, setAmount] = useState("");
  const handleInputChang = (e: any) => {
    setAmount(e.target.value);
  };
  const [cost, setCost] = useState("");
  const handleInputCost = (e: any) => {
    setCost(e.target.value);
  };
  const [account, setAccount] = useState("");
  const handleInputAccount = (e: any) => {
    setAccount(e.target.value);
  };

  // const base = localStorage.getItem("test");
  // if (base) {
  //   test = JSON.parse(base);
  // }

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(test));
  });

  const handleClick = () => {
    dispatch(
      fromSlice.actions.submitFrom({
        mode: selectMode,
        code: selectCode,
        amout: amout,
        current: selectCurrent,
        cost: cost,
        account: account,
      })
    );
  };

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
            onChange={handlePayment}
          />
          <Dropdown
            placeholder="SELECT FOR CODE"
            label="For Control Code"
            options={options2}
            styles={dropdownStyles}
            onChange={handleCode}
          />
        </Stack>
        <Stack className="texbox-list">
          <TextField
            label="Amount ($)"
            styles={textFieldStyles}
            onChange={handleInputChang}
          />
          <Dropdown
            placeholder="SELECT CURRENCY"
            label="Current"
            options={options3}
            styles={dropdown}
            onChange={handleCurrent}
          />
          <TextField
            label="Cost Centre"
            styles={textFieldStyles}
            onChange={handleInputCost}
          />
          <TextField
            label="Account Code"
            styles={textFieldStyles}
            onChange={handleInputAccount}
          />
        </Stack>
        <Stack>
          <button type="submit" onClick={handleClick}>
            Submit
          </button>
        </Stack>
      </div>
    </section>
  );
}

export default Payment;
