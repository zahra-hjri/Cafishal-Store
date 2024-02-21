const Footer = () => {
  const [id,setId]=UseState(1)

  const handled = () =>{
    console.log("zarin")
  }
  return <div className="flex text-white my-3 p-6 justify-center items-center text-md">
  <li className="px-1 text-sm md:text-sm lg:text-md px-1">instam</li>
    <li className="px-1 text-sm md:text-sm lg:text-md px-1">telegram</li>
    <li className="px-1 text-sm md:text-sm lg:text-md px-1">what's app</li>
    <li className="px-1 text-sm md:text-sm lg:text-md px-1">Twitter</li>
    <li className="px-1 text-sm md:text-sm lg:text-md px-1">zoom</li>
  </div>;
};

export default Footer;
