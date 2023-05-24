import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";

const Cal = () => {
  const [inputVal1, setInputVal1] = useState(0);
    const [oprationValue, setOprationValue] = useState(0);
    const [currentOpration,setCurrentOpration] = useState('');

  const allBtArr = [
    {
      value: 0,
      btFun: () => {
        setInputVal1((prevValue) => parseInt(prevValue.toString() + 0));
      },
    },
    {
      value: 1,
      btFun: () => {
        setInputVal1((prevValue) => parseInt(prevValue.toString() + 1));
      },
    },
    {
      value: 2,
      btFun: () => {
        const newValue = inputVal1.toString() + 2;
        setInputVal1(parseInt(newValue));
      },
    },
    {
      value: 3,
      btFun: () => {
        const newValue = inputVal1.toString() + 3;
        setInputVal1(parseInt(newValue));
      },
    },
    {
      value: 4,
      btFun: () => {
        setInputVal1((prevValue) => parseInt(prevValue.toString() + 4));
      },
    },
    {
      value: 5,
      btFun: () => {
        setInputVal1((prevValue) => parseInt(prevValue.toString() + 5));
      },
    },
    {
      value: 6,
      btFun: () => {
        setInputVal1((prevValue) => parseInt(prevValue.toString() + 6));
      },
    },
    {
      value: 7,
      btFun: () => {
        setInputVal1((prevValue) => parseInt(prevValue.toString() + 7));
      },
    },
    {
      value: 8,
      btFun: () => {
        setInputVal1((prevValue) => parseInt(prevValue.toString() + 8));
      },
    },
    {
      value: 9,
      btFun: () => {
        setInputVal1((prevValue) => parseInt(prevValue.toString() + 9));
      },
    },
    {
      value: "C",
      btFun: () => {
        setInputVal1((prevValue) => parseInt(prevValue.toString() + "C"));
      },
    },
    {
      value: "AC",
      btFun: () => {
        setInputVal1((prevValue) => parseInt(prevValue.toString() + "AC"));
      },
    },
  ];

  const oprationArr = [
    {
        value: '+',
        btFun: () => {
            setCurrentOpration('+');
            setOprationValue(inputVal1);
            setInputVal1(0);
        }
    },
    {
        value: '-',
        btFun: () => {
            setCurrentOpration('-');
            setOprationValue(inputVal1);
            setInputVal1(0);
        }
    },
    {
      value: '*',
      btFun: () => {
          setCurrentOpration('*');
          setOprationValue(inputVal1);
          setInputVal1(0);
      }
  },
  {
    value: '/',
    btFun: () => {
        setCurrentOpration('/');
        setOprationValue(inputVal1);
        setInputVal1(0);
    }
},
   {
        value: '=',
        btFun: () => {
            if(currentOpration === '+'){

                setInputVal1((prevValue) => {
                    return prevValue + oprationValue
                })

            }if(currentOpration === '/'){

              setInputVal1((prevValue) => {
                  return  oprationValue / prevValue 
              })
            }
            if(currentOpration === '*'){

              setInputVal1((prevValue) => {
                  return oprationValue * prevValue
              })
            }
            else if(currentOpration === '-'){
                setInputVal1((prevValue) => {
                    return oprationValue - prevValue; 
                })
                 
            }

        }
    }
  ];
  return (
    <div>
      <p> This is cal js {inputVal1} </p>
      <p>   {oprationValue} {currentOpration}</p>


      <CalWrapper allBtArr={allBtArr} oprationArr={oprationArr}/>
    </div>
  );
};

export default Cal;
