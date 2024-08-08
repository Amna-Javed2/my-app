import React from "react";

function ConditionalRendering() {
  let content;
  let isLoggedIn = true;
  let newCondition = true;
  let newCondition2 = true;
  if (isLoggedIn) {
    content = <div>Admin Panel</div>;
  } else {
    content = <div>Login Form</div>;
  }
  return (
    <div className="flex flex-col p-12 gap-5">
      {content}
      If you prefer more compact code, you can use the conditional ? operator.
      Unlike if,it works inside JSX:
      {newCondition ? <div className="bg-slate-500">Condition True (Ternary Operator)</div> :
       <div className="bg-blue-500">Condition False</div>}
      {newCondition2 && <div className="bg-red-500">AND(&& (without else part only if part)) Condition True</div>}
    </div>
  );
}

export default ConditionalRendering;
