import { useEffect, useRef, useState } from "react";

const OTP_COUNT = 5;

const OTP = () => {
  const [inputArr, setInputArr] = useState(new Array(OTP_COUNT).fill(""));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0].focus();
  },[]);

  
  const inputStyle = {
    width: "44px",
    height: "44px",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    fontSize: "18px",
  };

  const handleChange = (e, index) => {
    const value = e.target.value.trim();
    if (isNaN(value)    ) {
        return
    };
    const newValue = [...inputArr];
    console.log(value)
    newValue[index] = value.slice(-1);
    setInputArr(newValue);
    console.log(newValue);
    value && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e) => {
    console.log(e);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>OTP</h1>
        <div>
          {inputArr.map((input, index) => {
            return (
              <input
                key={index}
                value={inputArr[index]}
                type="text"
                style={inputStyle}
                ref={(input) => (refArr.current[index] = input)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OTP;
