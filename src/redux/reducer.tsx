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
    },
  },
});

// const rootReducer = (state = { initState }, action: any) => {
//   switch (action.type) {
//     case "payOption":
//       return {
//         ...state,
//         payDetails: [action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;
