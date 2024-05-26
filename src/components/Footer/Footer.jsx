const Footer = () => {
  const [id,setId]=UseState("zahra")

  const handled = () =>{
    
  }
  return <div className="flex text-white mt-3 justify-between items-center">
  <li className="text-sm md:text-md lg:text-md p-3 text-gray-400 mt-2">insta</li>
    <li className="text-sm md:text-md lg:text-md p-3 text-gray-200 mt-2">telegram</li>
    <li className="text-sm md:text-md lg:text-md p-3 text-gray-200 mt-2">what's app</li>
    <li className="text-sm md:text-md lg:text-md p-3 text-gray-200 mt-2">Twitter</li>
    <li className="text-sm md:text-md lg:text-md p-3 text-gray-200 mt-2">discord</li>
    <li className="text-sm md:text-md lg:text-md p-3 text-gray-300 mt-2"></li>
  </div>;
};

export default Footer;
