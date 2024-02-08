const Footer = () => {
  const [id,setId]=UseState("")

  const handled = () =>{
    console.log("zahra")
  }
  return <div className="flex text-gray-950 my-1 p-3 justify-center items-center text-xs">
  <li className="px-1">instagram</li>
    <li className="px-1">telegram</li>
    <li className="px-1">what's app</li>
    <li className="px-1">Twitter</li>
    <li className="px-1">zoom</li>
  </div>;
};

export default Footer;
