import React from "react";

function layout({ children } : {children:React.ReactNode}) {
  return (
    <div>
      <div className="bg-blue-500 w-60">Settings Layout</div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
