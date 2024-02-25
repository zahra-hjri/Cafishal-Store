const Footer = () => {
  const [id,setId]=UseState(1)

  const handled = () =>{
    console.log("zarin")
  }
  return <div className="flex text-white my-4 p-5 justify-center items-center text-md">
  <li className="px-1 text-sm md:text-sm lg:text-md px-2">instam</li>
    <li className="px-1 text-sm md:text-sm lg:text-md px-2">telegram</li>
    <li className="px-1 text-sm md:text-sm lg:text-md px-2">what's app</li>
    <li className="px-1 text-sm md:text-sm lg:text-md px-2">Twitter</li>
    <li className="px-1 text-sm md:text-sm lg:text-md px-2">zoom</li>
  </div>;
};

export default Footer;
