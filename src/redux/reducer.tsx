import { createSlice } from "@reduxjs/toolkit";

export const fromSlice = createSlice({
  name: "payment/addPaymentDetail",
  initialState: {
    paymemt: {
      mode: "",
      code: "",
      amout: "",
      current: "",
      cost: "",
      account: "",
    },

    payDetails: {
      mode: "",
      code: "",
      amout: "",
      current: "",
      cost: "",
      account: "",
    },
  },
  reducers: {
    submitFrom: (state, action) => {
      state.paymemt = action.payload;
      state.payDetails = action.payload;
    },
  },
});
