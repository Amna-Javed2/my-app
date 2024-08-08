import Image from "next/image";
import Image1 from "@/assets/images/girl.jpg";

function DisplayingData() {
  const user = {
    name: "Amna",
    role: "admin",
    age: 16,
    email: "amna32611@gmail.com",
    imageUrl:
      "https://th.bing.com/th?id=OIP.tLotgCDtzgTdwJcTiXWRCwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2",
    imageSize: 90,
  };
  return (
    <div className="mt-2">
      My User Info
      <div>
        <div>Name: {user.name}</div>
        <div>Role: {user.role}</div>
        <div>Age: {user.age}</div>
        <div>Email: {user.email}</div>
        <div className="flex gap-5">
          <Image
            className="rounded-full"
            src={user.imageUrl}
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="rounded-full"
            src={Image1}
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default DisplayingData;
