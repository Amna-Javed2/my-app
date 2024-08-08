import Link from "next/link";

const dashboard = () => {
  const user = {
    name: 'Amna'
  }
  return (
    <div className="p-12">
      {/* for error file */}
      {/* <div>{user}</div> */}
      dashboard
      <div>
        <p className="font-bold text-lg">Nested Routes</p>
        <p>
          To create a nested route, you can nest folders
          inside...................new folders in the app directory.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {`html <a> tag`}
        
          {`The <a> tag defines a hyperlink, which is used to link from one page to another.`} 
          <p>
            The most important attribute of the a tag element is the href
            attribute, which indicates the links destination.
          </p>
       
        <a href={`https://www.youtube.com`} target={"_blank"} className="font-bold text-red-500">{`I'm <a> Anchor tag & not allowed in NextJs`}</a>
      </div>

      <div className="p-5 bg-slate-200 flex flex-col gap-5">
        <Link href={'/dashboard/analytics'}>Analytics</Link>
        <a href={'/dashboard/settings'}>Settings</a>
        link tag increase the speed OR anchor tag reduce the speed
        <Link href={'/dashboard/settings/password'}>Setting Password</Link>
        <Link href={'/dashboard/settings/profile'}>Setting Profile</Link>
      </div>
    </div>
  );
};

export default dashboard;
