import Paydetail from "./components/Paydetail";
import Payment from "./components/Payment";
import Validity from "./components/Validity";
import "./components/Mystyle.scss";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

function App() {
  initializeIcons();
  return (
    <section className="header-wrapper">
      <Validity />
      <Payment />
      <Paydetail />
    </section>
  );
}
export default App;
