import { createSeve } from "miragejs";

export const setupServer = () => {
  let server = createSeve();
  server.get("/api/payment", {
    payment: [
      {
        id: 1,
        name: "Bob",
      },
    ],
  });
};
