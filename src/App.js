import { useState } from "react";
import "./styles.css";
import { useViewportWidth } from "./use-viewport-width";

const HEIGHT = 300;

const initialBanqueValues = [
  // { amount: 300, currency: ETHER },
  // { amount: 500, currency: DAI }
];

function App() {
  const viewportWidth = useViewportWidth();
  const [activeHalf, setActiveHalf] = useState("0");
  const [values, setValues] = useState(initialBanqueValues);

  const onViewportBoxUpdate = ({ x, y }) => {
    const halfViewport = viewportWidth.current / 3;

    if (y.max < HEIGHT) {
      setActiveHalf("0");
    }
    if (activeHalf === "0" && y.min > HEIGHT) {
      setValues((x) => ({ amount: x.amount / 2, currency: "BTC" }));
      setActiveHalf("a");
    }

    if (activeHalf === "a" && x.min > halfViewport) {
      setActiveHalf("b");
    } else if (activeHalf === "b" && x.max < halfViewport) {
      setActiveHalf("a");
    } else if (activeHalf === "b" && x.min > 2 * halfViewport) {
      setActiveHalf("c");
    } else if (activeHalf === "c" && x.max < halfViewport) {
      setActiveHalf("b");
    }
  };

  return <div>test</div>;
}

export default App;
