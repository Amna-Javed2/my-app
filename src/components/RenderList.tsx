import React from "react";

const products = [
  { title: "A", id: 1 },
  { title: "B", id: 2 },
  { title: "C", id: 3 },
  { title: "D", id: 4 },
  { title: "E", id: 5 },
  { title: "F", id: 6 },
  { title: "A", id: 1 },
  { title: "B", id: 2 },
  { title: "C", id: 3 },
  { title: "D", id: 4 },
  { title: "E", id: 5 },
  { title: "F", id: 6 },
  { title: "A", id: 1 },
  { title: "B", id: 2 },
  { title: "C", id: 3 },
  { title: "D", id: 4 },
  { title: "E", id: 5 },
  { title: "F", id: 6 },
  { title: "A", id: 1 },
  { title: "B", id: 2 },
  { title: "C", id: 3 },
  { title: "D", id: 4 },
  { title: "E", id: 5 },
  { title: "F", id: 6 },
];

function RenderList() {
  return (
    <div className="flex flex-col gap-5 p-2">
      Never use For loop within html 
      <p>Always use Map Function</p>

      <div>Manually (display)</div>

      <div className="flex flex-col gap-3">
        <p>{products[0].title}</p>
        <p>{products[1].title}</p>
        <p>{products[2].title}</p>
      </div>

      <div>Map Function
        (bad practice = use of index parameter)
      </div>
      <ul>
      {products.map((product)=>{
        return <li key={product.id}>{product.title}</li>;
      })}
      </ul>
    </div>
  );
}

export default RenderList;
