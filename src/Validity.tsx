import React from "react";
import {
  DatePicker,
  mergeStyleSets,
  defaultDatePickerStrings,
} from "@fluentui/react";
import { Checkbox, Stack } from "@fluentui/react";
import "./Validity.css";

function Validity() {
  const stackTokens = { childrenGap: 10 };
  const styles = mergeStyleSets({
    root: { selectors: { "> *": { marginBottom: 15 } } },
    control: { width: 350, marginBottom: 15 },
  });

  return (
    <section className="header">
      <div className="header-heading">Validity Details</div>
      <div className="wrapper">
        <div className="date-form">
          <DatePicker
            isRequired
            label="Validity Period (From)"
            ariaLabel="Select a date"
            className={styles.control}
          />
          <DatePicker
            isRequired
            label="validity Period (To)"
            ariaLabel="Select a date"
            className={styles.control}
          />
        </div>
        <div>
          <b>eRFA Ticket is VALID ON SQ FLT ONLY and is NON ENDORSABLE</b>
          <Stack tokens={stackTokens} className="chebox-list">
            <b>
              Please tick the following boxes of Ticket Endor sement if
              applicable:
            </b>
            <div className="checkbox-items">
              <Checkbox label="REFUNDABALE" />
              <Checkbox label="REROUTABALE" />
              <Checkbox label="FPP MILEAGE" />
            </div>
          </Stack>
        </div>
      </div>
    </section>
  );
}

export default Validity;
