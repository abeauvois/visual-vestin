import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import "./styles.css";
import { useViewportWidth } from "./use-viewport-width";
import { CardBox } from "./atoms";
import { ValueLogoLabel } from "./molecules/ValueLogoLabel";
import { ETHER, DAI } from "./data/Tokens";

const HEIGHT = 300;

const initialBanqueValues = [
  { amount: 300, currency: ETHER },
  { amount: 500, currency: DAI }
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
      //setValues((x) => ({ amount: x.amount / 2, currency: "BTC" }));
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

  //return <div>test {values[0].amount}</div>;
  return (
    <AnimateSharedLayout>
      <div className="column">
        <div style={{ height: HEIGHT, width: "100%", background: "blue" }}>
          <Zone
            values={values}
            color="#f107a3"
            isSelected={activeHalf === "0"}
            onViewportBoxUpdate={onViewportBoxUpdate}
          />
        </div>
        <div className="container">
          <Zone
            values={values}
            color="#f107a3"
            isSelected={activeHalf === "a"}
            onViewportBoxUpdate={onViewportBoxUpdate}
          />
          <Zone
            values={values}
            color="#7b2ff7"
            isSelected={activeHalf === "b"}
            onViewportBoxUpdate={onViewportBoxUpdate}
          />
          <Zone
            values={values}
            color="#7b2ff7"
            isSelected={activeHalf === "c"}
            onViewportBoxUpdate={onViewportBoxUpdate}
          />
        </div>
      </div>
    </AnimateSharedLayout>
  );
}

function Zone({ values, color, isSelected, onViewportBoxUpdate }) {
  return (
    <div className="sub-container">
      <motion.div className="overlay" />
      {isSelected &&
        values.map((value) => {
          return (
            <CardBox
              key={value.currency.symbol}
              className="box"
              layoutId="box"
              initial={false}
              animate={{ backgroundColor: color }}
              drag
              // Snap the box back to its center when we let go
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              // Allow full movememnt outside constraints
              dragElastic={1}
              onViewportBoxUpdate={onViewportBoxUpdate}
            >
              <ValueLogoLabel value={value} />
            </CardBox>
          );
        })}
    </div>
  );
}

export default App;
