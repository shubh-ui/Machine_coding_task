import { useState, useRef } from "react";
import "./TostContainer.css";

const TostContainer = () => {
  const [tosts, setTosts] = useState([]);
  const timerRef = useRef({});

  const addTost = (message, type) => {
    setTosts((preTosts) => {
      const id = new Date().getTime();
      timerRef.current[id] = setTimeout(() => {
        handleRemoveTost(id);
      }, 7000);
      return [...preTosts, { id, message, type }];
    });
  };

  console.log("timerRef", timerRef);

  const handleRemoveTost = (id) => {
    clearInterval(timerRef.current[id]);
    delete timerRef.current[id];
    setTosts((preTosts) => {
      const filteredTosts = preTosts.filter((tost) => tost.id !== id);
      return filteredTosts;
    });
  };

  console.log(tosts);
  return (
    <div className="Container">
      <div className="TostContainer">
        {tosts.length > 0 &&
          tosts.map((tost) => (
            <div key={tost.id} className={`Tost ${tost.type}`}>
              {tost.message}
              <span
                className="btnRemoveTost"
                onClick={() => handleRemoveTost(tost.id)}
              >
                X
              </span>
            </div>
          ))}
      </div>
      <div className="ButtonContainer">
        <button onClick={() => addTost("Success Tost", "success")}>
          Success Tost
        </button>
        <button onClick={() => addTost("Info Tost", "info")}>Info Tost</button>
        <button onClick={() => addTost("Warning Tost", "warning")}>
          Warning Tost
        </button>
        <button onClick={() => addTost("Error Tost", "error")}>
          Error Tost
        </button>
      </div>
    </div>
  );
};

export default TostContainer;
