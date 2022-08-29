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
import { keyboard } from "@testing-library/user-event/dist/keyboard";
// import { paymemtSelector } from "../redux/selectors";

function Payment() {
  const dispatch = useDispatch();
  const storageKey = "paymemtSelector";

  // const payment = useSelector(paymemtSelector);
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
  };
  const options1: IDropdownOption[] = [
    { key: "Recharge", text: "Recharge" },
    { key: "Charge", text: "Charge" },
  ];

  const [selectCode, setSelectCode] = useState("");
  const handleCode = (e: any, test: any) => {
    setSelectCode(test.key);
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
    { key: "VND", text: "VND" },
    { key: "USD", text: "USD" },
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

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
    console.log(formData);
    setSelectMode(formData.mode || "");
    setSelectCode(formData.code || "");
    setSelectCurrent(formData.current || "");
    setAmount(formData.amout || "");
    setCost(formData.cost || "");
    setAccount(formData.account || "");
  }, []);

  const handleClick = () => {
    const formData = {
      mode: selectMode,
      code: selectCode,
      amout: amout,
      current: selectCurrent,
      cost: cost,
      account: account,
    };

    dispatch(fromSlice.actions.submitFrom(formData));
    localStorage.setItem(storageKey, JSON.stringify(formData));
  };

  return (
    <section className="header">
      <div className="header-heading">Payment details for fare</div>
      <div className="wrapper">
        <Stack className="dropdown-list">
          <Dropdown
            required
            placeholder="Select one below"
            label="Payment Mode"
            options={options1}
            defaultSelectedKey={selectMode}
            styles={dropdownStyles}
            onChange={handlePayment}
          />
          <Dropdown
            required
            placeholder="SELECT FOR CODE"
            label="For Control Code"
            options={options2}
            defaultSelectedKey={selectCode}
            styles={dropdownStyles}
            onChange={handleCode}
          />
        </Stack>
        <Stack className="texbox-list">
          <TextField
            required
            label="Amount ($)"
            type="number"
            value={amout}
            styles={textFieldStyles}
            onChange={handleInputChang}
          />
          <Dropdown
            required
            placeholder="SELECT CURRENCY"
            label="Current"
            options={options3}
            defaultSelectedKey={selectCurrent}
            styles={dropdown}
            onChange={handleCurrent}
          />
          <TextField
            label="Cost Centre"
            type="number"
            value={cost}
            styles={textFieldStyles}
            onChange={handleInputCost}
          />
          <TextField
            label="Account Code"
            value={account}
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
