const Footer = () => {
  const [id,setId]=UseState("zahra")

  const handled = () =>{
    
  }
  return <div className="flex text-white my-3 justify-between">
  <li className="text-sm md:text-sm lg:text-md p-3 text-gray-300 mt-2">insta</li>
    <li className="text-sm md:text-sm lg:text-md p-3 text-gray-300 mt-2">telegram</li>
    <li className="text-sm md:text-sm lg:text-md p-3 text-gray-300 mt-2">what's app</li>
    <li className="text-sm md:text-sm lg:text-md p-2 text-gray-300 mt-2">Twitter</li>
    <li className="text-sm md:text-sm lg:text-md p-2 text-gray-300 mt-2">discord</li>
  </div>;
};

export default Footer;
