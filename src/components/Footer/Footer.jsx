const Footer = () => {
  const [id,setId]=UseState("zahra")

  const handled = () =>{
    
  }
  return <div className="flex text-white my-2 p-4 justify-center items-center">
  <li className="text-sm md:text-sm lg:text-md p-2 text-white">instagram</li>
    <li className="text-sm md:text-sm lg:text-md p-2 text-white">telegram</li>
    <li className="text-sm md:text-sm lg:text-md p-2 text-white">what's app</li>
    <li className="text-sm md:text-sm lg:text-md p-2 text-white">Twitter</li>
    <li className="text-sm md:text-sm lg:text-md p-2 text-white">zoom</li>
  </div>;
};

export default Footer;
