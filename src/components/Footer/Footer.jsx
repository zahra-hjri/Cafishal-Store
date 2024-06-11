const Footer = () => {
  const [id,setId]=UseState("zahra")

  const handled = () =>{
    
  }
  return <div className="flex text-white mt-3 justify-between items-center">
  <li className="text-sm md:text-md lg:text-md p-3 text-gray-400 mt-2 font-bold">insta</li>
    <li className="text-sm md:text-md lg:text-md p-3 text-gray-400 mt-2 font-bold">telegram</li>
    <li className="text-sm md:text-md lg:text-md p-3 text-gray-400 mt-3 font-bold">what's app</li>
    <li className="text-sm md:text-md lg:text-md p-3 text-gray-400 mt-2 font-bold">Twitter</li>
    <li className="text-sm md:text-md lg:text-md p-2 text-gray-400 my-2 font-bold">discord</li>
    <li className="text-sm md:text-md lg:text-md p-3 text-gray-300 my-2 font-bold"></li>
  </div>;
};

export default Footer;
