'use client'
import React,{useState} from "react";

function UpdatingScreen(props: any) {
    console.log(props);
//   let value = 2;
   const [value, setValue] = useState(props.count1);
// [value , setterMethod] = useState(0)
// setterMethod value ko update krta

  const increment = () => {
    setValue(value + 1);
    console.log(value);
  };
  const decrement = () => {
    setValue(value - 1);
    console.log(value);
  };
  return (
    <div>
      Counter App
      <div className="flex gap-5 justify-center items-center">
        <button className="bg-green-500 rounded-lg p-2" onClick={increment}>Increment</button>
        {value}
        <button className="bg-red-500 rounded-lg p-2" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default UpdatingScreen;
