import Paydetail from "./Paydetail";
import Payment from "./Payment";
import Validity from "./Validity";
import "./Mystyle.scss";
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
