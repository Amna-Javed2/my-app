const dashboard = () => {
  return (
    <div className="p-12">
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
      <p>
        {`The <a> tag defines a hyperlink, which is used to link from one page to another.`}
        </p>
        <p>The most important attribute of the <a> element is the href attribute, which indicates the link's destination.</p>
        <a>YouTube Link</a>
        </div>
    </div>
  );
};

export default dashboard;
