const Footer = () => {
  const [id,setId]=UseState("")

  const handled = () =>{
    console.log("zahra")
  }
  return <div className="flex text-gray-900 my-1 p-3 justify-center items-center text-xs">
  <li className="px-1 text-xs">instagram</li>
    <li className="px-1 text-xs">telegram</li>
    <li className="px-1 text-xs">what's app</li>
    <li className="px-1 text-xs">Twitter</li>
    <li className="px-1">zoom</li>
  </div>;
};

export default Footer;
