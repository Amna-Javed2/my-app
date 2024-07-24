"use client"

const MyButton = () => {
  const handleClick = () => {
    alert('Hello i am a button click');
  }
  return (
    <div className="flex gap-5 p-3 flex-col">
      <div>
        <button className="bg-red-100 rounded-md p-1" onClick={handleClick}>I am a button</button>
      </div>
      {`Web Events, React hooks etc render/use on Client Components,
      to make client component always use "use client" on top of the file`}
    </div>
  );
};

export default MyButton;
