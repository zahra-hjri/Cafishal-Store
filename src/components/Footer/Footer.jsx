const Footer = () => {
  const [id,setId]=UseState("")

  const handled = () =>{
    
  }
  return <div className="flex text-white my-2 p-5 justify-center items-center">
  <li className="text-sm md:text-sm lg:text-md px-2 text-white">instagram</li>
    <li className="text-sm md:text-sm lg:text-md px-2 text-white">telegram</li>
    <li className="text-sm md:text-sm lg:text-md px-2 text-white">what's app</li>
    <li className="text-sm md:text-sm lg:text-md px-2">Twitter</li>
    <li className="text-sm md:text-sm lg:text-md px-2">zoom</li>
  </div>;
};

export default Footer;
