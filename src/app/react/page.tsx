import MyButton from "@/components/Button";
import AboutPage from "@/components/markupWithJSX";

// const MyButton2 = () => {
//   return <button>I am a button 2</button>
// };

function MyButton2() {
  return <button className="p-2 bg-slate-100 rounded-lg">I am a button 2</button>;
}

const react = () => {
  return (
    <div className="flex flex-col gap-3 text-xs p-10">
      Learn React
      
      
      <div>
        Create a Component
        <h1 className="font-bold">Welcome to my app</h1>
        <div className="flex gap-2 py-2">
          <MyButton />
          <div>
          <MyButton2 />
          </div>
        </div>
      </div>

    
      <div>
        <p className="text-sm font-semibold">Markup with JSX</p>
        <AboutPage />
      </div>

      
      <div>
        Adding styles
        <p className="text-sm font-semibold">In React, you specify a CSS with className.It works the same way as the HTML class attribute:</p>
      </div>

    </div>
  );
};

export default react;
