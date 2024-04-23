const Footer = () => {
  const [id,setId]=UseState("zahra")

  const handled = () =>{
    
  }
  return <div className="flex text-white my-3 justify-between">
  <li className="text-sm md:text-sm lg:text-md p-3 text-gray-300 mt-1">insta</li>
    <li className="text-sm md:text-sm lg:text-md p-3 text-gray-300 mt-1">telegram</li>
    <li className="text-sm md:text-sm lg:text-md p-3 text-gray-300 mt-1">what's app</li>
    <li className="text-sm md:text-sm lg:text-md p-3 text-gray-300 mt-1">Twitter</li>
    <li className="text-sm md:text-sm lg:text-md p-3 text-gray-300">discord</li>
  </div>;
};

export default Footer;
