import { useState } from "react";
import "./app.css";

function Card({ pic, expend, setExpend, index }) {
  return (
    <div
      style={{ backgroundImage: `url(pics/${pic}) ` }}
      className={expend === index ? "open" : "close"}
      onClick={() => {
        console.log(index);
        setExpend(index);
      }}
    ></div>
  );
}
function App() {
  const pics = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
  const [expend, setExpend] = useState(3);

  return (
    <div className="container">
      {pics.map((pic, i) => (
        <Card
          pic={pic}
          key={pic}
          index={i}
          expend={expend}
          setExpend={setExpend}
        />
      ))}
    </div>
  );
}

export default App;
